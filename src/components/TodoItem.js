import React, { Component } from 'react';
import classNames from 'classnames';
import PropType from 'prop-types';

import './TodoItem.css';
import checkImg from '../image/check.svg'
import checkCompleteImg from '../image/check-complete.svg'



class TodoItem extends Component{
    render(){
        const {item, onClick} = this.props;
        let url = checkImg;
        if (item.isComplete){
            url = checkCompleteImg;
        }

        return(
            <div className={classNames('TodoItem', {'TodoItem-Complete' : item.isComplete})}>
                <img onClick={onClick} src={url} width={32}></img>
                <p>{item.title}</p>
            </div>
        );
    }
}

//PropType kiem tra du lieu cua props va component nhan vao
//Co cai nhin truc quang hon ve component
//Tranh gap loi
TodoItem.PropType = {
    item: PropType.shape({
        isComplete: PropType.bool.isRequired,
        title: PropType.string
    }),
    onClick: PropType.func.isRequired
}

export default TodoItem;