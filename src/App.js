import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import styled from 'styled-components';

class App extends Component {
  render() {
    return (
      <div>
          <SayFullName name="Павел" fullname="Рыжов" link="https://vk.com"/>
          <SayFullName name="Иван" fullname="Петров" link="https://facebook.com"/>
          <SayFullName name="Неизвестный" fullname="пользователь" link="#"/>   
      </div>
      );
  }
}

function SayFullName(props) {
  return (
    <div>
      <h1>Имя - {props.name} фамилия - {props.fullname}</h1>
      <a href={props.link}>Ссылка на мой профиль</a>
    </div>
  );
}

export default App;
