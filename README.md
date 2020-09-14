# tensorflow 在前端的基础应用流程（图片识别/深度学习）

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5dee91d5431843979dce5f66a5b6655d~tplv-k3u1fbpfcp-zoom-1.image)

## 前言

这里不会介绍一些深度学习等相关概念，这也不是我的专业领域；从训练素材、模型训练及导出、模型转换及前端应用等，一些主要环节记录。目标：创建自己的图像识别训练模型，并应用在实际项目。

## 开工

#### 第一步，装环境并准备训练模型

```
参考：https://github.com/tensorflow/hub/tree/master/tensorflow_hub/tools/make_image_classifier

$ pip install "tensorflow~=2.0"
$ pip install "tensorflow-hub[make_image_classifier]~=0.6"

下载训练所需的图片集，并解压（自己准备也行）：https://storage.googleapis.com/download.tensorflow.org/example_images/flower_photos.tgz
下载模型（可以自己在这个上面找你想要的）：https://tfhub.dev/
我用的是这个：https://storage.googleapis.com/tfhub-modules/google/imagenet/mobilenet_v2_035_224/classification/4.tar.gz
```

#### 第二步，开始训练

```
把以上素材和模型解压到你新建的文件夹，注意这里的文件结构，可以自己自定义；
接下来执行以下命令：
make_image_classifier \
  --image_dir flower_photos \
  --tfhub_module imagenet_mobilenet_v2_035_224_classification_4 \
  --image_size 224 \
  --saved_model_dir my_dir/new_model \
  --labels_output_file class_labels.txt \
  --tflite_output_file new_mobile_model.tflite \
  --summaries_dir my_log_dir

 如果执行过程中出现什么错误，自己根据提示解决把，我这边遇到了 google.protobuf 找不到
 的问题，解决方式如下：
  pip uninstall protobuf
  pip uninstall google
  pip install google
  pip install protobuf
  pip install google-cloud

如果你跟我用的是一样的素材和模型，那么训练过程应该很快，因为图片素材内容不多。
```

#### 第三步，转换模型提供 js 环境使用

```
参考：https://github.com/tensorflow/tfjs/tree/master/tfjs-converter

pip install tensorflowjs

刚刚我们训练完后，模型被导出到了 my_dir/new_model 目录，接下来进入my_dir（当然你也可以不进，
文件结构你怎么调整都行）；不过需要注意的一点，如果没有创建virtual environment，你的模型
导入路径和导出路径就不能使用相对路径了；通过pwd查看当前目录完整路径填进去即可，不然会报错哦。

tensorflowjs_converter \
    --input_format=tf_saved_model \
    --output_format=tfjs_graph_model \
    --signature_name=serving_default \
    --saved_model_tags=serve \
    /这里是pwd显示的路径/my_dir/new_model \
    /这里是pwd显示的路径/my_dir/tfjs_model

大功告成！tfjs_model里面就是我们需要的内容了
```

#### 第四步，终于进入前端部分啦！

```
项目直接参考：https://github.com/lewis617/antd-icon-classifier

这个是antd的一个demo，基本稍加修改就行了，当然你也可以直接在你自己项目中使用

把tfjs_model拷贝到这个demo里面，然后升级一下@tensorflow/tfjs，
我这边当前使用的是2.3.0版本；核心代码：


// import * as tfconv from '@tensorflow/tfjs-converter';
// import * as tf from '@tensorflow/tfjs-core';
import { loadGraphModel, tidy, zeros, browser, scalar, image } from '@tensorflow/tfjs';

// import ICON_CLASSES from './icon_classes';

// const MODEL_PATH = 'https://cdn.jsdelivr.net/gh/lewis617/antd-icon-classifier@0.0.1/model/model.json';

/** 其实主要就改了，下面这两个配置的引入 */
// 这里其实直接使用图片素材里面的分类名字就行了，一开始准备训练的素材（flower_photos）
import ICON_CLASSES from './flower_photos';

const MODEL_PATH = '../tfjs_model/model.json';

const IMAGE_SIZE = 224;

function findIndicesOfMax(inp, count) {
	const outp = [];
	for (let i = 0; i < inp.length; i += 1) {
		outp.push(i); // add index to output array
		if (outp.length > count) {
			outp.sort((a, b) => inp[b] - inp[a]); // descending sort the output array
			outp.pop(); // remove the last index (index of smallest element in output array)
		}
	}
	return outp;
}

let model;

const load = async () => {
	model = await loadGraphModel(MODEL_PATH);
	const result = tidy(() => model.predict(zeros([1, IMAGE_SIZE, IMAGE_SIZE, 3])));
	await result.data();
	result.dispose();
};

const predict = imgEl => {
	if (!imgEl || !model) {
		return;
	}
	new Image().src =
		'//gm.mmstat.com/xtracker.1.1?gmkey=OTHER&cna=71kGFSaixjsCASp4SmFO+kSL&spm-cnt=0.0.0.0.1a035a26Tlwg9f&logtype=2&gokey=' +
		encodeURIComponent(
			`v=1.2.4&ts=${Math.round(new Date().getTime() / 1000)}&tid=XT-00213&dr=${
				window.location.origin
			}&t=event&ec=data_icon`
		);
	const pred = tidy(() => {
		// 从图片转为 tensor
		const img = browser.fromPixels(imgEl).toFloat();

		const offset = scalar(127.5);
		// 把一张图片从 [0, 255] 归一化到 [-1, 1].
		const normalized = img.sub(offset).div(offset);

		// Resize the image to
		let resized = normalized;
		if (img.shape[0] !== IMAGE_SIZE || img.shape[1] !== IMAGE_SIZE) {
			const alignCorners = true;
			resized = image.resizeBilinear(normalized, [IMAGE_SIZE, IMAGE_SIZE], alignCorners);
		}

		// Reshape so we can pass it to predict.
		const batched = resized.reshape([-1, IMAGE_SIZE, IMAGE_SIZE, 3]);
		return model.predict(batched).squeeze().arraySync();
	});
	const predictions = findIndicesOfMax(pred, 5).map(i => ({
		className: ICON_CLASSES[i],
		score: pred[i],
	}));
	return predictions;
};

export default {
	load,
	predict,
};

然后，demo/index.js 里面模块引入改一下即可：

// import classifier from '@ali/antd-icon-classifier';
import classifier from '../src';

window.onload = async () => {
	await classifier.load();
	console.log('loaded');
	const imgEl = document.querySelector('img');
	let res = classifier.predict(imgEl);
	console.log(res);
	res = classifier.predict(imgEl);
	console.log(res);
};

当然，别忘记改一下index.html里面的图片来验证一下

yarn start 搞定

```

#### 结尾

可以看到这个向日葵是识别出来了，但是得分不高，应该是训练素材内容太少了；另外，这里有个边缘计算的概念，就是把模型直接加载到用户电脑云行，这样前端就不依赖服务端啦。虽然我们可能不懂深度学习里面一下复杂的概率、模型、数学运算等知识，但是这完全不影响我们来使用他对吧。而且我相信，智能化前端一定会到来。预测未来，不如创造未来！

如果你有更好的想法，快来分享吧。最后，感谢这篇文章的启发：https://mp.weixin.qq.com/s/sGaXe9QXPAZAy-ga-aJnVQ

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5317999ce5e3463d8b06a15f9e1600fb~tplv-k3u1fbpfcp-zoom-1.image)
