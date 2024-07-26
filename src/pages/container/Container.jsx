import Sidebar from '../../components/sidebar/Sidebar';

const Container = ({ children }) => {
  return (
    <div className="container">
      <Sidebar />
      <main className="main-content">{children}</main>
    </div>
  );
};

export default Container;
