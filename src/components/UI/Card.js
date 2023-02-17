/* 
Wrapper 요소 
- 다른 컴포넌트에서 Card를 사용할 경우 해당 컴포넌트에 지정한 className을 덮어쓰므로
  props.className을 포함시켜주어야함
- 다른 컴포넌트에서 Card 안에 또 다른 컴포넌트를 삽입하고 싶은 경우
  Card의 요소가 props.children을 감싸도록 설정해주어야함
*/
import './Card.css';

function Card(props) {
    const classes = 'card ' + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Card;
