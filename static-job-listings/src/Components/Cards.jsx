import React from "react";
import "../card.css";
import data from "../data.json";
import logo1 from "../images/photosnap.svg";
import logo2 from "../images/manage.svg";
import logo3 from "../images/account.svg";
import logo4 from "../images/myhome.svg";
import logo5 from "../images/loop-studios.svg";
import logo6 from "../images/faceit.svg";
import logo7 from "../images/shortly.svg";
import logo8 from "../images/insure.svg";
import logo9 from "../images/eyecam-co.svg";
import logo10 from "../images/the-air-filter-company.svg";

export default function Card() {
  return (
    <div className="container">
      <div className="card card1" key={data.Vagas[0].id}>
        <img src={logo1} alt="minha imagem" />
        <div className="descript-left">
          <div className="descript-cabecalho">
            <span>{data.Vagas[0].company}</span>
            <span>{data.Vagas[0].new}</span>
            <span>{data.Vagas[0].featured}</span>
          </div>

          <div className="title">
            <h4>{data.Vagas[0].position}</h4>
          </div>

          <div className="descript-footer">
            <span>{data.Vagas[0].postedAt + " - "}</span>
            <span>{data.Vagas[0].contract + " - "}</span>
            <span>{data.Vagas[0].location}</span>
          </div>
        </div>

        <div className="descript-right">
          <span>{data.Vagas[0].role}</span> <span>{data.Vagas[0].level}</span>
          <span>{data.Vagas[0].languages}</span>
        </div>
      </div>

      <div className="card card2" key={data.Vagas[1].id}>
        <img src={logo2} alt="minha imagem" />
        <div className="descript-left">
          <div className="descript-cabecalho">
            <span>{data.Vagas[1].company}</span>
            <span>{data.Vagas[1].new}</span>
            <span>{data.Vagas[1].featured}</span>
          </div>

          <div className="title">
            <h4>{data.Vagas[1].position}</h4>
          </div>

          <div className="descript-footer">
            <span>{data.Vagas[1].postedAt + " - "}</span>
            <span>{data.Vagas[1].contract + " - "}</span>
            <span>{data.Vagas[1].location}</span>
          </div>
        </div>

        <div className="descript-right">
          <span>{data.Vagas[1].role}</span> <span>{data.Vagas[1].level}</span>
          <span>{data.Vagas[1].languages}</span>
        </div>
      </div>

      <div className="card card3" key={data.Vagas[2].id}>
        <img src={logo3} alt="minha imagem" />
        <div className="descript-left">
          <div className="descript-cabecalho">
            <span>{data.Vagas[2].company}</span>
            <span>{data.Vagas[2].new}</span>
            <span>{data.Vagas[2].featured}</span>
          </div>

          <div className="title">
            <h4>{data.Vagas[2].position}</h4>
          </div>

          <div className="descript-footer">
            <span>{data.Vagas[2].postedAt + " - "}</span>
            <span>{data.Vagas[2].contract + " - "}</span>
            <span>{data.Vagas[2].location}</span>
          </div>
        </div>

        <div className="descript-right">
          <span>{data.Vagas[2].role}</span> <span>{data.Vagas[2].level}</span>
          <span>{data.Vagas[2].languages}</span>
        </div>
      </div>

      <div className="card card4" key={data.Vagas[3].id}>
        <img src={logo4} alt="minha imagem" />
        <div className="descript-left">
          <div className="descript-cabecalho">
            <span>{data.Vagas[3].company}</span>
            <span>{data.Vagas[3].new}</span>
            <span>{data.Vagas[3].featured}</span>
          </div>

          <div className="title">
            <h4>{data.Vagas[3].position}</h4>
          </div>

          <div className="descript-footer">
            <span>{data.Vagas[3].postedAt + " - "}</span>
            <span>{data.Vagas[3].contract + " - "}</span>
            <span>{data.Vagas[3].location}</span>
          </div>
        </div>

        <div className="descript-right">
          <span>{data.Vagas[3].role}</span> <span>{data.Vagas[3].level}</span>
          <span>{data.Vagas[3].languages}</span>
        </div>
      </div>

      <div className="card card5" key={data.Vagas[4].id}>
        <img src={logo5} alt="minha imagem" />
        <div className="descript-left">
          <div className="descript-cabecalho">
            <span>{data.Vagas[4].company}</span>
            <span>{data.Vagas[4].new}</span>
            <span>{data.Vagas[4].featured}</span>
          </div>

          <div className="title">
            <h4>{data.Vagas[4].position}</h4>
          </div>

          <div className="descript-footer">
            <span>{data.Vagas[4].postedAt + " - "}</span>
            <span>{data.Vagas[4].contract + " - "}</span>
            <span>{data.Vagas[4].location}</span>
          </div>
        </div>

        <div className="descript-right">
          <span>{data.Vagas[4].role}</span> <span>{data.Vagas[4].level}</span>
          <span>{data.Vagas[4].languages}</span>
        </div>
      </div>

      <div className="card card6" key={data.Vagas[5].id}>
        <img src={logo6} alt="minha imagem" />
        <div className="descript-left">
          <div className="descript-cabecalho">
            <span>{data.Vagas[5].company}</span>
            <span>{data.Vagas[5].new}</span>
            <span>{data.Vagas[5].featured}</span>
          </div>

          <div className="title">
            <h4>{data.Vagas[5].position}</h4>
          </div>

          <div className="descript-footer">
            <span>{data.Vagas[5].postedAt + " - "}</span>
            <span>{data.Vagas[5].contract + " - "}</span>
            <span>{data.Vagas[5].location}</span>
          </div>
        </div>

        <div className="descript-right">
          <span>{data.Vagas[5].role}</span> <span>{data.Vagas[5].level}</span>
          <span>{data.Vagas[5].languages}</span>
        </div>
      </div>

      <div className="card card7" key={data.Vagas[6].id}>
        <img src={logo7} alt="minha imagem" />
        <div className="descript-left">
          <div className="descript-cabecalho">
            <span>{data.Vagas[6].company}</span>
            <span>{data.Vagas[6].new}</span>
            <span>{data.Vagas[6].featured}</span>
          </div>

          <div className="title">
            <h4>{data.Vagas[6].position}</h4>
          </div>

          <div className="descript-footer">
            <span>{data.Vagas[6].postedAt + " - "}</span>
            <span>{data.Vagas[6].contract + " - "}</span>
            <span>{data.Vagas[6].location}</span>
          </div>
        </div>

        <div className="descript-right">
          <span>{data.Vagas[6].role}</span> <span>{data.Vagas[6].level}</span>
          <span>{data.Vagas[6].languages}</span>
        </div>
      </div>

      <div className="card card8" key={data.Vagas[7].id}>
        <img src={logo8} alt="minha imagem" />
        <div className="descript-left">
          <div className="descript-cabecalho">
            <span>{data.Vagas[7].company}</span>
            <span>{data.Vagas[7].new}</span>
            <span>{data.Vagas[7].featured}</span>
          </div>

          <div className="title">
            <h4>{data.Vagas[7].position}</h4>
          </div>

          <div className="descript-footer">
            <span>{data.Vagas[7].postedAt + " - "}</span>
            <span>{data.Vagas[7].contract + " - "}</span>
            <span>{data.Vagas[7].location}</span>
          </div>
        </div>

        <div className="descript-right">
          <span>{data.Vagas[7].role}</span> <span>{data.Vagas[7].level}</span>
          <span>{data.Vagas[7].languages}</span>
        </div>
      </div>

      <div className="card card9" key={data.Vagas[8].id}>
        <img src={logo9} alt="minha imagem" />
        <div className="descript-left">
          <div className="descript-cabecalho">
            <span>{data.Vagas[8].company}</span>
            <span>{data.Vagas[8].new}</span>
            <span>{data.Vagas[8].featured}</span>
          </div>

          <div className="title">
            <h4>{data.Vagas[8].position}</h4>
          </div>

          <div className="descript-footer">
            <span>{data.Vagas[8].postedAt + " - "}</span>
            <span>{data.Vagas[8].contract + " - "}</span>
            <span>{data.Vagas[8].location}</span>
          </div>
        </div>

        <div className="descript-right">
          <span>{data.Vagas[8].role}</span> <span>{data.Vagas[8].level}</span>
          <span>{data.Vagas[8].languages}</span>
        </div>
      </div>

      <div className="card card10" key={data.Vagas[9].id}>
        <img src={logo10} alt="minha imagem" />
        <div className="descript-left">
          <div className="descript-cabecalho">
            <span>{data.Vagas[9].company}</span>
            <span>{data.Vagas[9].new}</span>
            <span>{data.Vagas[9].featured}</span>
          </div>

          <div className="title">
            <h4>{data.Vagas[9].position}</h4>
          </div>

          <div className="descript-footer">
            <span>{data.Vagas[9].postedAt + " - "}</span>
            <span>{data.Vagas[9].contract + " - "}</span>
            <span>{data.Vagas[9].location}</span>
          </div>
        </div>

        <div className="descript-right">
          <span>{data.Vagas[9].role}</span> <span>{data.Vagas[9].level}</span>
          <span>{data.Vagas[9].languages}</span>
        </div>
      </div>
    </div>
  );
}
