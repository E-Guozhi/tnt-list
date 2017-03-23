/*
* @Author: wj77998
* @Date:   2017-03-02 19:09:56
* @Email:  wj77998@qq.com
* @Last Modified by:   wj77998
* @Last Modified time: 2017-03-02 19:37:27
*/
     
import React from 'react'

import { render } from 'react-dom';

import List from '../src/index'

import "../assets/index.less"
var arr=[{'name':'百度不跳转','needArrow':false},{'name':'警告不弹出','needArrow':false},{'name':'不去谷歌','needArrow':false}];
var arr1=[{'name':'跳转百度','needArrow':true},{'name':'弹出警告','needArrow':true},{'name':'去谷歌','needArrow':true}]
render(
  <List 
    listArr={arr}
  />
, document.getElementById('app'));
render(
	<List 
    listArr={arr1}
  />
, document.getElementById('app1')
);
