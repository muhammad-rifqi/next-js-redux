import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setAge, setName } from "/store/person/";
import { setSay } from "/store/test/";


const Home = () => {

  const { person, test } = useSelector((state) => ({
    person: state.person,
    test: state.test,
  }));
  const dispatch = useDispatch();

  return (
    <>
      {/* onChange={(e) => {
          dispatch(setName(e.target.value));
        }} */}
        asdadas
    </>
  )
}

export default Home
