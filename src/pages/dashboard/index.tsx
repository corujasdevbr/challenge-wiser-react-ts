import Head from 'next/head'
import WiserLogo from '../../assets/wsp-logo.svg'
import styles from '../../styles/pages/Login.module.scss'
import Title from '../../components/title'
import { Container} from 'react-bootstrap';
import withPrivateRoute from '../../utils/withPrivateRoute'
import { token } from '../../utils/constants';
const Dashboard : React.FC<any> = () => {
    
    return (
        <Container>
            <WiserLogo />
            <Title  text="Dashboard" />
        </Container>
    )
}

export default Dashboard