import logoImage from '@/assets/logo/logo1-2.png'; 
import './Logo.css';

function Logo() {
  return (
    <a href="/" className="logo-link">
      <img 
        src={logoImage} 
        alt="Stjärn Bygg & Måleri Logotyp" 
        className="logo-image" 
      />
    </a>
  )
}

export default Logo