/**
 * Created by KE on 2017/3/22.
 */
import React, { PropTypes } from "react"
import classNames from 'classnames'
export default class List extends React.Component {
	static propTypes = {
		listArr: React.PropTypes.array,
	}
	static defaultProps = {
		listArr: [{ 'name': 'Item 1' }, { 'name': 'Item 2' }, { 'name': 'Item 3' }]
	}
	render() {
		var _html = [];
		this.props.listArr.forEach(function(v, i) {
			if(v.needArrow & v.needArrow == true) {
				var _li = <li className='tnt-list-cell' key={i}>
				<a className='tnt-nav-right' href={v.link?v.link:'javascript:void(0)'} onClick={v.onClick?v.onClick:null}>{v.name}</a>
				</li>
			} else {
				var _li = <li className='tnt-list-cell' key={i}>{v.name}</li>
			}
			_html.push(_li);
		})

		return(
			<ul className='tnt-list'>{_html}</ul>
		)
	}
}