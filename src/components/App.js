import Home from "../pages/home";
import {Link, Route, Routes} from "react-router-dom";
import DataPages from "../pages/data";
import {ConfigProvider} from "antd";
import {useEffect} from "react";
import {getRandomMovie} from "../services/services";
import {useDispatch} from "react-redux";

function App() {
    const dispatch = useDispatch()
    useEffect(()=> {
        // dispatch(getRandomMovie())
    }, [])
    return (
      <ConfigProvider componentSize='small'>
          <div style={{display: 'flex', justifyContent: "space-around"}}>
              <Link to="home">Home</Link>
              <Link to="data">Data</Link>
          </div>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />}/>
              <Route path="/data" element={<DataPages />}/>
          </Routes>
      </ConfigProvider>
    );
}

export default App;
