/*
 * @文件描述:
 * @公司: thundersdata
 * @作者: 廖军
 * @Date: 2020-09-12 22:41:00
 * @LastEditors: 廖军
 * @LastEditTime: 2020-09-13 21:07:37
 */
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
