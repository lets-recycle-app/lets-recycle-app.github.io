import './Footer.css';

function Footer() {
  return (
      <footer>
      <div className="container">
        Copyright &copy;  {(new Date().getFullYear())} Let's Recycle All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
