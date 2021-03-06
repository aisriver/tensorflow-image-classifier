/*
 * @文件描述:
 * @公司: thundersdata
 * @作者: 廖军
 * @Date: 2020-09-12 22:41:00
 * @LastEditors: 廖军
 * @LastEditTime: 2020-09-13 21:36:27
 */
// import * as tfconv from '@tensorflow/tfjs-converter';
// import * as tf from '@tensorflow/tfjs-core';
import { loadGraphModel, tidy, zeros, browser, scalar, image } from '@tensorflow/tfjs';

// import ICON_CLASSES from './icon_classes';

// const MODEL_PATH = 'https://cdn.jsdelivr.net/gh/lewis617/antd-icon-classifier@0.0.1/model/model.json';

import ICON_CLASSES from './flower_photos';

const MODEL_PATH = '../flower_photos_tfjs_model/model.json';

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
