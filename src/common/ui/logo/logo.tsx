import { useEffect } from 'react'
import styles from './logo.module.css'
import logo from '/src/assets/icons/logo.svg'

const Logo = () =>{
	useEffect(() => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://fonts.googleapis.com/css2?family=Agdasima:wght@400;700&family=Orbitron:wght@400..900&display=swap';
        document.head.appendChild(link);
        
        return () => {
            document.head.removeChild(link);
        };
    }, []);
	return(
		<div className={styles.logo}>
			
				<span style={{color:'white'}}>TEST</span>
				<img src={logo} alt="Logo" />			
				<span style={{color:'red'}}>3</span>
			
		</div>
	)
}

export default Logo