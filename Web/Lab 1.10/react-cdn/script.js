// Класова компонента
class HobbyClassComponent extends React.Component {
  render() {
    return <h2>Моє хобі — фотографія. Я люблю знімати природу та місто.</h2>;
  }
}

// Функціональна компонента
function HobbyFunctionComponent() {
  return <h2>Моє хобі — програмування. Я створюю веб-застосунки на React.</h2>;
}

// Основний рендер
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div style={{ textAlign: 'center', marginTop: '50px' }}>
    <HobbyClassComponent />
    <HobbyFunctionComponent />
  </div>
);