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
		listArr: { 'name': 'Item 1' }
	}
	render() {
		var listArr=this.props.listArr;
		if(listArr.needArrow & listArr.needArrow == true) {
			var _html = <li className='tnt-list-cell'>
				<a className='tnt-nav-right' href={listArr.link?listArr.link:'javascript:void(0)'} onClick={listArr.onClick?listArr.onClick:null}>{listArr.name}</a>
				</li>
		} else {
			var _html = <li className='tnt-list-cell'>{listArr.name}</li>
		}

		return(
			<ul className='tnt-list'>{_html}</ul>
		)
	}
}