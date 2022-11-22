import React, { useEffect, useState } from 'react'
import logo from './images/AMA_logo.png'

import { withAuthenticator} from '@aws-amplify/ui-react';

import { I18n } from 'aws-amplify';
import { translations } from '@aws-amplify/ui';

import Modal from "react-modal";
import  QRCode  from "qrcode"

function App({ signOut, user }) {
    const [src, setSrc] = useState('');
    const [modalIsOpen, setIsOpen] = React.useState(false);

    useEffect(() => {
      QRCode.toDataURL('#').then(setSrc);
    }, [])

  return (
    <div style={styles.container}>
      <header style={styles.hfContainer}>
        <img src={logo} alt='logo' style={styles.logo}/>
        <div style={styles.nameBox}>
          <div className='App' style={styles.userTxt}>{user.attributes.email}</div>
        </div>
        <button onClick={signOut} style={styles.loBtn}>ログアウト</button>
      </header>
      <div style={ styles.contactBox }>
          <p style={ styles.contactTxt }><span style={{color:'red'}}>1</span>件の連絡があります</p>
              <button onClick="#" style={styles.btnBox}>連絡一覧へ</button>
      </div>
      <div style={ styles.Box }>
          <div style={styles.LessonsBox}>
            <div style={styles.triangle} />
            <p style={styles.LessonsTxt}>授業一覧</p>
          </div>
          <div style={styles.LessonsList}>
            <div style={styles.LListBox}>
              <p style={styles.LeftTxt}>基本情報</p>
              <p style={styles.RightTxt}>月曜日:1-2限</p>
            </div>
            <div style={styles.LListBox}>
              <p style={styles.LeftTxt}>Javascript</p>
              <p style={styles.RightTxt}>火曜日:1-2限</p>
            </div>
            <div style={styles.LListBoxLast}>
              <p style={styles.LeftTxt}>アプリ開発</p>
              <p style={styles.RightTxt}>水曜日:3限</p>
            </div>
          </div>
            <button onClick="#" style={styles.btnBox}>授業詳細へ</button>
        </div>
      <div className="App">
        <button style={styles.styleQR} onClick={() => setIsOpen(true)}>QR表示</button>
        <Modal isOpen={modalIsOpen}>
          <button style={styles.styleQR} onClick={() => setIsOpen(false)}>QRを閉じる</button>
          <img style={styles.QRcode} src={src}></img>
        </Modal>
      </div>
      <footer style={styles.hfContainer}>
        
      </footer>
      
    </div>
  )
}

const styles = {
  container: { flex: 1, height: '100vh' },
  hfContainer: { 
    width: '100%', 
    margin: '0 auto', 
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'center', 
    paddingBottom: 5, 
    backgroundColor: '#FCBF4C'
  },
  logo: {
    width: '15%',
    marginLeft: '5%',
    borderRadius: 50,
    marginTop: 10

  },
  nameBox: {
    width: '45%',
    // height: '5%',
    paddingTop: '2%',
    paddingBottom: '2%',
    backgroundColor: 'white',
    borderRadius: 5,
    marginLeft: 'auto',
    marginRight: 'auto',
    position: 'absolute',
    top: '3%',
    left: '30%'
    
  },
  userTxt: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  loBtn: {
    width: '12%',
    height: '8%',
    border: 'none',
    borderRadius: 5,
    fontSize: 16,
    position: 'absolute',
    right: '4%',
    top: '4%'
  },
  contactBox: {
    width: '50%',
    padding: '3% 0',
    margin: ' 0 auto',
    marginTop: '7%',
    border: 'solid orange',
    borderRadius: 5,
    position: 'relative'
  },
  contactTxt: {
    textAlign: 'center',
    marginBottom: 20
  },
  btnBox: {
    width: '30%',
    paddingTop: '0.5%',
    paddingBottom: '0.5%',
    border: 'solid',
    borderRadius: 7,
    backgroundColor: 'rgba(255,165,0,0.7)',
    position: 'absolute',
    bottom: 5,
    right: 5,
    fontSize: 18,
    color: 'white',
  },
  btnTxt: {
    fontSize: 16,
    color: 'white',
    position: 'absolute',
    bottom: 0
  },
  Box: {
    width: '50%',
    // height: '10%',
    padding: '7% 0',
    margin: ' 0 auto',
    marginTop: '1%',
    border: 'solid orange',
    borderRadius: 5,
    position: 'relative'
  },
  LessonsBox: {
    width: '40%',
    height: '7%',
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: '#FCBF4C',
    borderRadius: 40
  },
  LessonsTxt: {
    fontSize: 16,
    color: 'white',
    marginTop: 'auto',
    textAlign: 'center',
    marginBottom: 'auto'
  },
  LessonsList: {
  width: '85%',
  marginTop: '5%',
  marginBottom: '5%',
  marginLeft: 'auto',
  marginRight: 'auto',
  borderRadius: 5,
  border: 'solid',
  borderColor: '#FCBF4C'  
  },
  LListBox: {
    backgroundColor: 'white',
    borderBottom: 'solid #FCBF4C',
    marginBottom: 0,
    display: 'flex',
    justifyContent: 'space-between'
  },
  LListBoxLast: {
    backgroundColor: 'white',
    border: 'none',
    marginBottom: 0,
    display: 'flex',
    justifyContent: 'space-between'
  },

  LeftTxt: {
    fontSize: 14,
    marginLeft: 5
  },
  RightTxt: {
    fontSize: 14,
    marginRight: 5
  },
  styleQR: {
    width: '30%',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '5%',
    marginBottom: '5%',
    border: 'none',
    borderRadius: 50,
    color: 'white',
    backgroundColor: '#FCBF4C',
    fontSize: 25 
  },
  QRcode: {
    display: 'block',
    padding: 20,
    border: 'solid',
    borderRadius: 2,
    borderColor: '#FCBF4C',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 40
  }

}

export default withAuthenticator(App);

I18n.putVocabularies(translations);
I18n.setLanguage('ja');

