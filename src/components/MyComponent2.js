import PropTypes from 'prop-types';

const MyComponent = ({ name, favoriteNumber, children }) => {
  // 매개변수에 비구조화 할당
  //const { name, favoriteNumber, children } = props;

  return (
    <>
      <div>나의 두번째 컴포넌트!</div>
      <div>이름 : {name}</div>
      <div>좋아하는 숫자 :{favoriteNumber}</div>
      <div>내용: {children}</div>
    </>
  );
};

MyComponent.defaultProps = {
  name: '(기본이름)',
};

MyComponent.propTypes = {
  favoriteNumber: PropTypes.number.isRequired,
};

export default MyComponent;
