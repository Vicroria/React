import * as React from "react";
import ReactDOM from 'react-dom';

class Add extends React . Component {

    state = {
    name : '' , 
    text : '' ,
    agree : false , // нове значення стану - agree (булевий)
    }
    handleChange = ( e ) => {
        const { id , value } = e . currentTarget    
        this . setState ( { [ id ] : e . currentTarget . value } )    
        }
    onBtnClickHandler = ( e ) => {
    e . preventDefault ( )
    }
    handleNameChange = ( e ) => {
    this . setState ( { name : e . currentTarget . value } )
    }
    handleTextChange = ( e ) => {
    this . setState ( { text : e . currentTarget . value } )
    }
    handleCheckboxChange = ( e ) => { // обробник кліків по чекбоксах 
    // щоб встановити true / false зчитуємо властивість checked
    this . setState ( { agree : e . currentTarget . checked } )
    }
    render () {
         const { name , text , agree } = this . state
        return (
        <form className = ' add '>< input id = ' name ' type = ' text ' onChange = { this . handleChange } className = ' add__author '   placeholder = ' Ваше імя ' value = { name } />
        <textarea id = ' text 'onChange = { this . handleChange }className = ' add__text ' placeholder = ' Текст новини ' value = { text } ></textarea >
    <label className = ' add__checkrule ' ><input type = ' checkbox ' onChange = { this . handleCheckboxChange } /> Я згоден з правилами </label >
    {/* Кнопці додали disabled рівний (НЕ agree) */}
    <button className = ' add__btn ' onClick = { this . onBtnClickHandler }disabled = { ! agree } >Показати alert</button >
    </form >
    )
    ReactDOM.render(Add , document.getElementById('root'));
}
}
export default Add;