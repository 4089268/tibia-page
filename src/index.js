import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Container } from "./components/Container";

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

root.render(
  <>
    <Container title="titulo 1">
      <label>Hola mundo</label>
    </Container>

    <Container title="titulo 1" align="center">
      <label>Hola mundo center</label>
    </Container>

    <Container text="Contenedor 2" align="center">
      <label>Inputs Center</label>
      <div>
      <input type="text" placeholder="textp" />
      <input type="button" value="yes" />
      <input type="button" value="no" />
      </div>
      <input type="datetime"  />

      <img src="https://static.tibia.com/images/global/header/tibia-logo-artwork-top.gif" width={200} height={200} />
    </Container>

    <Container text="Contenedor 2">
      <label>Inputs Start</label>
      <div>
      <input type="text" placeholder="textp" />
      <input type="button" value="yes" />
      <input type="button" value="no" />
      </div>
      <input type="datetime"  />

      <img src="https://static.tibia.com/images/global/header/tibia-logo-artwork-top.gif" width={200} height={200} />
    </Container>

    <Container title="titulo 1">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Nunc vel risus
        commodo viverra maecenas accumsan lacus vel facilisis. Habitant morbi
        tristique senectus et netus et malesuada. Et magnis dis parturient
        montes nascetur ridiculus. Amet purus gravida quis blandit. Senectus et
        netus et malesuada fames ac turpis. Sit amet porttitor eget dolor morbi.
        Sit amet cursus sit amet dictum sit amet justo. Eu nisl nunc mi ipsum
        faucibus vitae aliquet. Vitae tortor condimentum lacinia quis vel.
        Vulputate mi sit amet mauris. Leo a diam sollicitudin tempor id.
        Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper
        malesuada. Nulla malesuada pellentesque elit eget gravida cum. Gravida
        cum sociis natoque penatibus et magnis dis.
      </p>

      <p>
        Libero id faucibus nisl tincidunt eget nullam. Sed risus ultricies
        tristique nulla aliquet enim tortor. Id ornare arcu odio ut. Dui
        accumsan sit amet nulla facilisi morbi. Quis ipsum suspendisse ultrices
        gravida dictum. Lectus arcu bibendum at varius vel pharetra vel turpis.
        Arcu ac tortor dignissim convallis aenean et tortor at. Posuere urna nec
        tincidunt praesent semper feugiat. Luctus venenatis lectus magna
        fringilla urna porttitor rhoncus dolor purus. Vulputate dignissim
        suspendisse in est ante in nibh mauris. Etiam erat velit scelerisque in.
        At quis risus sed vulputate odio ut enim blandit volutpat. Cursus
        euismod quis viverra nibh cras.
      </p>

      <p>
        Tincidunt arcu non sodales neque. Interdum velit euismod in pellentesque
        massa placerat duis ultricies lacus. Lacus viverra vitae congue eu
        consequat ac. Bibendum est ultricies integer quis auctor. Fringilla urna
        porttitor rhoncus dolor purus non enim. Semper auctor neque vitae
        tempus. Lacus sed viverra tellus in hac habitasse platea dictumst
        vestibulum. In aliquam sem fringilla ut morbi tincidunt augue. Eget
        nullam non nisi est sit amet. Placerat in egestas erat imperdiet sed
        euismod nisi porta. Convallis tellus id interdum velit laoreet id donec
        ultrices tincidunt.
      </p>
    </Container>
  </>
);
