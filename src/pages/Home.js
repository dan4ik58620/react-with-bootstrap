import React from "react";
import Slider from "../components/Slider";
import { Container, Row, Col, Card } from "react-bootstrap";
import img1 from "../images/1.jpeg";
import img2 from "../images/2.jpeg";
import img3 from "../images/3.jpeg";
import img4 from "../images/4.jpeg";
import img5 from "../images/5.jpeg";
import img6 from "../images/6.jpeg";
import img7 from "../images/7.jpeg";
import img8 from "../images/8.jpeg";
import img9 from "../images/9.jpeg";
import img10 from "../images/10.jpeg";
function Home() {
  return (
    <>
      <h2>10 ШУТЕРОВ ДЛЯ СЛАБЫХ ПК</h2>
      <Slider />
      <Container style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
      </Container>
      <Container>
        <Row>
          <Col md={5}>
            <img src={img1} height={200} width={400} alt="S.T.A.L.K.E.R" />
          </Col>
          <Col md={7}>
            <h2>S.T.A.L.K.E.R</h2>
            <p>
              Шесть лет мы ждали S.T.A.L.K.E.R.. Нет, вы только вдумайтесь:
              ШЕСТЬ ЛЕТ! Итак, S.T.A.L.K.E.R. — игра-миф, игра-опасность,
              игра-предупреждение, в основе которой лежат многочисленные легенды
              чернобыльской Зоны, все эти мрачные отголоски эха катастрофы
              двадцатилетней давности. Потянет на вашем железе )
            </p>
          </Col>
        </Row>

        <Row>
          <Col md={5}>
            <img
              src={img2}
              height={200}
              width={400}
              alt="Call of Duty® 4: Modern Warfare®"
            />
          </Col>
          <Col md={7}>
            <h2>Call of Duty® 4: Modern Warfare®</h2>
            <p>
              Call of Duty 4: Modern Warfare - это четвертая номерная часть
              сериала Call of Duty, разработанная студией Infinity Ward.
              Системные требования: Microsoft® Windows® XP/Vista (Windows
              95/98/ME/2000 не поддерживаются) Процессор: Intel® Pentium® 4 с
              тактовой частотой 2,4 ГГц / AMD(R) 64 (TM) 2800+ / двухъядерные от
              Intel® и AMD® с тактовой частотой 1,8 ГГц или лучше Видеокарта:
              NVIDIA Geforce 6600 или лучше или ATI Radeon® 9800Pro или лучше
              Оперативная память (Гб): 1.0 Свободное место на HDD (Гб): 8.0
            </p>
          </Col>
        </Row>

        <Row>
          <Col md={5}>
            <img src={img3} height={200} width={400} alt="Team Fortress 2" />
          </Col>
          <Col md={7}>
            <h2>Team Fortress 2</h2>
            <p>
              Team Fortress 2 - это гротескный "шпионский" боевик, выполненный в
              стиле 50-х годов прошлого века. Игроки, разделенные на две команды
              - Красную и Синию, воюют друг с другом, выступая за несколько
              разных боевых классов, каждый из которых вооружен уникальным
              оружием. Системные требования: ОС: Windows® 7
              (32/64-bit)/Vista/XP. Процессор: 1.7 GHz Processor or better.
              Оперативная память: 512 MB ОЗУ DirectX: Версии 8.1. Сеть:
              Широкополосное подключение к интернету Место на диске: 15 G
            </p>
          </Col>
        </Row>

        <Row>
          <Col md={5}>
            <img src={img4} height={200} width={400} alt="FARCRY 3" />
          </Col>
          <Col md={7}>
            <h2>FARCRY 3</h2>
            <p>
              FARCRY 3 ультиплатформенная видеоигра в жанре Action в открытом
              мире, с элементами RPG Минимальные требования ОС: Windows 7 (с
              SP1) или Windows 8 Процессор: Intel Core 2 Duo E6700 @ 2,6 ГГц или
              лучше, AMD Athlon 64 X2 6000+ @ 3,0 ГГц или лучше Оперативная
              память: 4 ГБ Видео: карта 512 МБ, совместимая с DirectX 9.0c, с
              Shader Model 3.0 или выше / NVidia 8800 или лучше, AMD HD 2900 или
              лучше Звук: Звуковая карта, совместимая с DirectX 9.0c, с
              новейшими драйверами DirectX: 9.0c Место хранения: 15 ГБ .
            </p>
          </Col>
        </Row>

        <Row>
          <Col md={5}>
            <img
              src={img5}
              height={200}
              width={400}
              alt="Mafia: The City of Lost Heaven"
            />
          </Col>
          <Col md={7}>
            <h2>Mafia: The City of Lost Heaven</h2>
            <p>
              Mafia: The City of Lost Heaven — культовая игра, выполненная в
              смешении жанров шутера от третьего лица с автосимулятором,
              повествующая о приключениях члена итальянской мафии в вымышленном
              американском городе Лост Хэвен. Операционная система: Windows
              98/ME/2000/XP Процессор: Pentium 3 @ 500 MHz 96 Mb оперативной
              памяти Видеокарта: Любая с 32 Mb памяти Оперативная память (Гб):
              1.0 Свободное место на HDD (Гб): 1.8
            </p>
          </Col>
        </Row>

        <Row>
          <Col md={5}>
            <img
              src={img6}
              height={200}
              width={400}
              alt="Assassin’s Creed II"
            />
          </Col>
          <Col md={7}>
            <h2>Assassin’s Creed II</h2>
            <p>
              Assassin's Creed II – это приключенческий экшен от третьего лица.
              Действие игры происходит в средние века в Италии. Современный
              потомок величайших убийц в истории Дезмонд оказывается в теле Эцио
              Аудиторе де ла Фиренце, мастерски владеющего хашшашинскими
              навыками. Минимальные системные требования : ОС — Windows XP,
              Windows Vista, Windows 7; Процессор Intel Core 2 Duo 1,8 ГГц или
              AMD Athlon X2 64 2,4 ГГц ОЗУ — 1,5 Гб для Windows XP и 2 Гб для
              Windows Vista, Windows 7; Видеокарта с 256 Мб памяти, поддержкой
              DirectX 9.0; 8 Гб свободного места на диске.
            </p>
          </Col>
        </Row>

        <Row>
          <Col md={5}>
            <img src={img7} height={200} width={400} alt="Bulletstorm" />
          </Col>
          <Col md={7}>
            <h2>Bulletstorm</h2>
            <p>
              Bulletstorm (с англ. — «Ураган пуль») — компьютерная игра, шутер
              от первого лица. Системные требования: Windows XP (SP3), Windows
              Vista (SP2), Windows 7 Процессор Intel Core 2 Duo, AMD Athlon X2,
              1.6 GHz или лучше Память (RAM) 1.5 GB Свободное место на диске 9
              GB DirectX 9.0c - совместимая видеокарта, 256 MB; NVIDIA GeForce
              7600 GS, ATI Radeon HD 2400 Pro 256 MB или лучше DirectX 9.0c -
              совместимая звуковая карта, 16-bit Интернет-соединение
            </p>
          </Col>
        </Row>

        <Row>
          <Col md={5}>
            <img src={img8} height={200} width={400} alt="Valorant" />
          </Col>
          <Col md={7}>
            <h2>Valorant</h2>
            <p>
              Valorant - это многопользовательский шутер от создателей League of
              Legends, в котором игроков ждут противостояния команд в формате
              5х5 игроков. Процессор: Intel Core 2 Duo E8400 Видеокарта: Intel
              HD 3000 Оперативная память: 4 ГБ Операционная система: Windows
              7/8/10 64-разрядная
            </p>
          </Col>
        </Row>

        <Row>
          <Col md={5}>
            <img src={img9} height={200} width={400} alt="GTA: San Andreas" />
          </Col>
          <Col md={7}>
            <h2>GTA: San Andreas</h2>
            <p>
              Grand Theft Auto: San Andreas - пятая часть серии GTA, события
              которой разворачиваются в 1992 году, во времена расцвета
              преступности в мегаполисах Калифорнии. Минимальные системные
              требования: ОС: Microsoft® Windows® 2000 и XP Процессор: Pentium
              III или AMD Athlon, с тактовой частотой 1 ГГц Оперативная память:
              256 МБ Видеокарта: с 64 МБ видеопамяти (Geforce 3 или лучше) Место
              на диске: 3,6 ГБ свободного места (минимальная установка)
              Дополнительно: для игры будет установлено следующее ПО: DirectX и
              Sony DADC SecuROM
            </p>
          </Col>
        </Row>

        <Row>
          <Col md={5}>
            <img src={img10} height={200} width={400} alt="PUBG Lite" />
          </Col>
          <Col md={7}>
            <h2>PUBG Lite</h2>
            <p>
              PUBG LITE - это шутер в жанре королевская битва, которым вы можете
              наслаждаться на своем ноутбуке и недорогом ПК. Вы будете играть с
              максимум 100 игроками в борьбе за выживание. Минимальные системные
              требования OSWindows 7,8,10, 64bit CPUCore i3 2.4GHz RAM4GB
              GPUDirectX11 Intel HD Graphics 4000 HDD4GB
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
