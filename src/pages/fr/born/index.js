import React, {useState} from "react";
import Layout from '../../../components/layout'
import BabyPanel from '../../../components/babyPanel'
import styled from "styled-components"

const Flex = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`
const List = styled.p`
  font-size: 15px;
  cursor: pointer
`
const Menu = styled.div`
    width: 400px;
    height: ${(props) => props.size}px;
    color: rgb(17, 87, 78);
    font-size: 15px;
    background-color: rgb(255, 230, 181);
    border-style: solid;
    border-width: 2px;
    border-color: rgb(255, 203, 165);
    border-radius: 5px;
    margin: 10px;
    text-align: center;
`;

const Born = ({ children }) => {
  const [zooSelected, setZooSelected] = useState("Tous les zoos")
  const [zooClick, setZooClick] = useState(false)
  const [especeSelected, setEspeceSelected] = useState("Toutes les espèces")
  const [especeClick, setEspeceClick] = useState(false)

  function selectEspece(espece) {
    setEspeceClick(false);
    setEspeceSelected(espece);
  }

  function selectZoo(zoo) {
    setZooClick(false);
    setZooSelected(zoo);
  }

  const especeTab = Array.from(
    new Set(data.map((baby) => baby.espece)
                .sort()
  ))

  const zooTab = Array.from(
    new Set(data.map((baby) => baby.zoo)
                .sort()
  ))

  especeTab.unshift("Toutes les espèces")
  zooTab.unshift("Tous les zoos")

  return (
    <Layout pageTitle="Naissances" language={"french"}>
      <Flex>
        <Menu size={especeClick ? 19.18 + 31.82*especeTab.length : 47}>
          {especeClick ? 
            especeTab.map((espece, index) => {return<List key={index} onClick={() => 
              selectEspece(espece)}>{espece}</List>})
          : <List onClick={() => {setEspeceClick(true)}}><b>
              {"Espèce séléctionnée: " + especeSelected}
            </b></List>}
        </Menu>
        <Menu size={zooClick ? 19.18 + 31.82*zooTab.length : 47}>
          {zooClick ? 
            zooTab.map((zoo, index) => {return<List key={index} onClick={() => 
              selectZoo(zoo)}>{zoo}</List>})
          : <List onClick={() => {setZooClick(true)}}><b>
              {"Zoo séléctionnée: " + zooSelected}
            </b></List>}
        </Menu>
      </Flex>
      <Flex>
        {data.sort((a, b) => new Date(b.date.split('.').reverse().join('-')) - new Date(a.date.split('.').reverse().join('-')))
             .map((baby, index) => {return(<BabyPanel key={index} data={baby} zoo={zooSelected} espece={especeSelected}></BabyPanel>);})}
      </Flex>
    </Layout>
  );
}


const data = [
  {
    "espece": "Tigre de Sumatra",
    "zoo": "Zoo d'Amiens",
    "date": "17.09.2022",
    "parents": [
      "Ménya",
      "Argo"
    ],
    "babys": [
      {
        "name": "Pasai",
        "sexe": "mâle",
      }
    ]
  },
  {
    "espece": "Puma",
    "zoo": "Zoo de Vincennes",
    "date": "21.08.2020",
    "parents": [
      "Maeli",
      "Maceo"
    ],
    "babys": [
      {
        "name": "Emy",
        "sexe": "mâle",
      }
    ]
  },
  {
    "espece": "Tigre de Sumatra",
    "zoo": "Le Pal",
    "date": "26.12.2022",
    "parents": [
      "Kinabalu",
      "Taru"
    ],
    "babys": [
      {
        "name": "Sankha",
        "sexe": "femelle",
      }
    ]
  },
  {
    "espece": "Panthère du Sri-Lanka",
    "zoo": "Zoo de Cerza",
    "date": "29.08.2022",
    "parents": [
      "Walawé",
      "Lenn"
    ],
    "babys": [
      {
        "name": "Xxxx",
        "sexe": "femelle",
      },
      {
        "name": "Xxxx",
        "sexe": "femelle",
      },
      {
        "name": "Xxxx",
        "sexe": "mâle",
      }
    ]
  },
  {
    "espece": "Guépard du Soudan",
    "zoo": "Zoo Cerza",
    "date": "24.04.2021",
    "parents": [
      "Cailin",
      "Xxxx"
    ],
    "babys": [
      {
        "name": "Xxxx",
        "sexe": "femelle",
      },
      {
        "name": "Xxxx",
        "sexe": "femelle",
      },
      {
        "name": "Xxxx",
        "sexe": "femelle",
      }
    ]
  },
  {
    "espece": "Panthère du Sri-Lanka",
    "zoo": "Zoo Cerza",
    "date": "19.04.2021",
    "parents": [
      "Walawé",
      "Lenn"
    ],
    "babys": [
      {
        "name": "Xxxx",
        "sexe": "mâle",
      }
    ]
  },
  {
    "espece": "Lion",
    "zoo": "Zoo La Boissière",
    "date": "16.07.2022",
    "parents": [
      "Taya",
      "Deema"
    ],
    "babys": [
      {
        "name": "Xxxx",
        "sexe": "femelle",
      },
      {
        "name": "Xxxx",
        "sexe": "mâle",
      },
      {
        "name": "Xxxx",
        "sexe": "mâle",
      }
    ]
  },
  {
    "espece": "Margay",
    "zoo": "Zoo La Boissière",
    "date": "02.07.2022",
    "parents": [
      "Xxxx",
      "Xxxx"
    ],
    "babys": [
      {
        "name": "Xxxx",
        "sexe": "femelle",
      }
    ]
  },
  {
    "espece": "Serval",
    "zoo": "Zoo La Boissière",
    "date": "21.06.2022",
    "parents": [
      "Xxxx",
      "Xxxx"
    ],
    "babys": [
      {
        "name": "Xxxx",
        "sexe": "femelle",
      },
      {
        "name": "Xxxx",
        "sexe": "femelle",
      }
    ]
  },
  {
    "espece": "Chat des sables",
    "zoo": "Parc de Lumigny",
    "date": "11.08.2022",
    "parents": [
      "Xxxx",
      "Xxxx"
    ],
    "babys": [
      {
        "name": "Xxxx",
        "sexe": "femelle",
      },
      {
        "name": "Xxxx",
        "sexe": "femelle",
      }
    ]
  },
  {
    "espece": "Panthère du Sri-Lanka",
    "zoo": "Parc de Lumigny",
    "date": "11.08.2022",
    "parents": [
      "Xxxx",
      "Xxxx"
    ],
    "babys": [
      {
        "name": "Xxxx",
        "sexe": "femelle",
      },
      {
        "name": "Xxxx",
        "sexe": "femelle",
      }
    ]
  },
  {
    "espece": "Panthère",
    "zoo": "Parc de Lumigny",
    "date": "12.05.2022",
    "parents": [
      "Areta",
      "Tambo"
    ],
    "babys": [
      {
        "name": "Bagheera",
        "sexe": "femelle",
      }
    ]
  },
  {
    "espece": "Jaguarondi",
    "zoo": "Parc de Lumigny",
    "date": "01.08.2022",
    "parents": [
      "Xxxx",
      "Xxxx"
    ],
    "babys": [
      {
        "name": "Xxxx",
        "sexe": "femelle",
      }
    ]
  },
  {
    "espece": "Lynx Boréal",
    "zoo": "Parc animalier de Sainte-Croix",
    "date": "18.05.2022",
    "parents": [
      "Freyja",
      "Xxxx"
    ],
    "babys": [
      {
        "name": "Xxxx",
        "sexe": "femelle",
      },
      {
        "name": "Xxxx",
        "sexe": "femelle",
      },
      {
        "name": "Xxxx",
        "sexe": "femelle",
      }
    ]
  },
  {
    "espece": "Lynx Boréal",
    "zoo": "Parc animalier de Sainte-Croix",
    "date": "18.05.2021",
    "parents": [
      "Freyja",
      "Xxxx"
    ],
    "babys": [
      {
        "name": "Nassak",
        "sexe": "femelle",
      },
      {
        "name": "Stix",
        "sexe": "mâle",
      },
      {
        "name": "Eros",
        "sexe": "mâle",
      }
    ]
  },
  {
    "espece": "Jaguar",
    "zoo": "Parrot World",
    "date": "01.04.2022",
    "parents": [
      "Emma",
      "Ti'Punch"
    ],
    "babys": [
      {
        "name": "Akabo",
        "sexe": "mâle",
      },
      {
        "name": "Baalam",
        "sexe": "mâle",
      }
    ]
  },
  {
    "espece": "Ocelot",
    "zoo": "Parc animalier des Pyrénées",
    "date": "18.10.2022",
    "parents": [
      "Xena",
      "Grincheux"
    ],
    "babys": [
      {
        "name": "Wakan",
        "sexe": "mâle",
      }
    ]
  },
  {
    "espece": "Ocelot",
    "zoo": "Zoo du Bassin d'Arcachon",
    "date": "06.07.2022",
    "parents": [
      "Zoe",
      "Tiago"
    ],
    "babys": [
      {
        "name": "Cali",
        "sexe": "mâle",
      }
    ]
  },
  {
    "espece": "Ocelot",
    "zoo": "Zoo d'Asson",
    "date": "28.07.2022",
    "parents": [
      "Xxxx",
      "Xxxx"
    ],
    "babys": [
      {
        "name": "Pichu",
        "sexe": "mâle",
      }
    ]
  },
  {
    "espece": "Ocelot",
    "zoo": "Parc de l'Auxois",
    "date": "01.10.2022",
    "parents": [
      "Paprika",
      "Xxxx"
    ],
    "babys": [
      {
        "name": "Xxxx",
        "sexe": "X",
      }
    ]
  },
  {
    "espece": "Guépard d'Afrique Australe",
    "zoo": "Zoo de Montpellier",
    "date": "20.10.2021",
    "parents": [
      "Bastet",
      "Djéhuti"
    ],
    "babys": [
      {
        "name": "Djéhuti",
        "sexe": "femelle",
      },
      {
        "name": "Duma",
        "sexe": "femelle",
      },
      {
        "name": "Demba",
        "sexe": "mâle",
      }
    ]
  },
  {
    "espece": "Lion d'Afrique",
    "zoo": "Reserve Africaine de Sigean",
    "date": "31.05.2021",
    "parents": [
      "Jiboutie",
      "Xxxx"
    ],
    "babys": [
      {
        "name": "Utsie",
        "sexe": "femelle",
      },
      {
        "name": "Uganda",
        "sexe": "mâle",
      },
      {
        "name": "Uruk",
        "sexe": "mâle",
      }
    ]
  },
  {
    "espece": "Lion d'Afrique",
    "zoo": "Reserve Africaine de Sigean",
    "date": "30.10.2020",
    "parents": [
      "Xxxx",
      "Xxxx"
    ],
    "babys": [
      {
        "name": "Tahassi",
        "sexe": "femelle",
      },
      {
        "name": "Tiwanga",
        "sexe": "femelle",
      }
    ]
  },
  {
    "espece": "Lion d'Afrique",
    "zoo": "Zoo African Safari",
    "date": "28.08.2021",
    "parents": [
      "Féroce",
      "Attila"
    ],
    "babys": [
      {
        "name": "Malkia",
        "sexe": "femelle",
      },
      {
        "name": "Balou",
        "sexe": "mâle",
      },
      {
        "name": "Raïkaan",
        "sexe": "mâle",
      },
    ]
  },
  {
    "espece": "Lion d'Afrique",
    "zoo": "Zoo African Safari",
    "date": "21.08.2021",
    "parents": [
      "Naïka",
      "Attila"
    ],
    "babys": [
      {
        "name": "Tika",
        "sexe": "femelle",
      }
    ]
  },
  {
    "espece": "Lion d'Afrique",
    "zoo": "Zoo African Safari",
    "date": "01.10.2021",
    "parents": [
      "Shy",
      "Attila"
    ],
    "babys": [
      {
        "name": "Yali",
        "sexe": "femelle",
      },
      {
        "name": "Shira",
        "sexe": "femelle",
      },
      {
        "name": "Wonja",
        "sexe": "femelle",
      }
    ]
  },
  {
    "espece": "Lion d'Angola",
    "zoo": "Parc de Lumigny",
    "date": "10.08.2021",
    "parents": [
      "Sky",
      "Gao"
    ],
    "babys": [
      {
        "name": "Xxxx",
        "sexe": "mâle",
      },
      {
        "name": "Xxxx",
        "sexe": "mâle",
      }
    ]
  },
  {
    "espece": "Lion d'Angola",
    "zoo": "Bioparc de Doué-la-Fontaine",
    "date": "01.07.2021",
    "parents": [
      "Esma",
      "Baz"
    ],
    "babys": [
      {
        "name": "Nzuri",
        "sexe": "femelle",
      }
    ]
  },
  {
    "espece": "Panthère du Sri-Lanka",
    "zoo": "Zoo de Maubeuge",
    "date": "03.06.2021",
    "parents": [
      "Matara",
      "Lankaï"
    ],
    "babys": [
      {
        "name": "Xxxx",
        "sexe": "X",
      },
      {
        "name": "Xxxx",
        "sexe": "X",
      }
    ]
  },
  {
    "espece": "Panthère des neiges",
    "zoo": "Bioparc de Doué-la-Fontaine",
    "date": "23.05.2021",
    "parents": [
      "Junga",
      "Xxxx"
    ],
    "babys": [
      {
        "name": "Makalu",
        "sexe": "femelle",
      },
      {
        "name": "Jangali",
        "sexe": "mâle",
      }
    ]
  },
  {
    "espece": "Lynx des Carpates",
    "zoo": "Parc de Fort-Mardyck",
    "date": "24.05.2021",
    "parents": [
      "Mariel",
      "Jasper"
    ],
    "babys": [
      {
        "name": "Xxxx",
        "sexe": "mâle",
      }
    ]
  },
  {
    "espece": "Lion",
    "zoo": "Safari de Peaugres",
    "date": "01.08.2020",
    "parents": [
      "Kananga",
      "Xxxx"
    ],
    "babys": [
      {
        "name": "Xxxx",
        "sexe": "femelle",
      },
      {
        "name": "Xxxx",
        "sexe": "femelle",
      },
      {
        "name": "Xxxx",
        "sexe": "femelle",
      }
    ]
  },
  {
    "espece": "Panthère des neiges",
    "zoo": "Safari de Peaugres",
    "date": "30.05.2020",
    "parents": [
      "Lasya",
      "Arman"
    ],
    "babys": [
      {
        "name": "Chakra",
        "sexe": "mâle",
      }
    ]
  },
  {
    "espece": "Tigre de Sibérie",
    "zoo": "Zoo de la Bourbansais",
    "date": "01.07.2020",
    "parents": [
      "Liska",
      "Makari"
    ],
    "babys": [
      {
        "name": "Xxxx",
        "sexe": "X",
      },
      {
        "name": "Xxxx",
        "sexe": "X",
      }
    ]
  },
  {
    "espece": "Panthère des neiges",
    "zoo": "Zoo de Saint-Martin-la-Plaine",
    "date": "13.06.2020",
    "parents": [
      "Saïan",
      "Xxxx"
    ],
    "babys": [
      {
        "name": "Xxxx",
        "sexe": "femelle",
      },
      {
        "name": "Xxxx",
        "sexe": "mâle",
      },
      {
        "name": "Xxxx",
        "sexe": "mâle",
      }
    ]
  },
  {
    "espece": "Jaguar",
    "zoo": "Parc de Lumigny",
    "date": "08.08.2021",
    "parents": [
      "Leila",
      "Teo"
    ],
    "babys": [
      {
        "name": "Lumé",
        "sexe": "mâle",
      },
      {
        "name": "Limbani",
        "sexe": "mâle",
      }
    ]
  },
  {
    "espece": "Ocelot",
    "zoo": "Zoo de Monsinéry",
    "date": "01.07.2022",
    "parents": [
      "Xxxx",
      "Xxxx"
    ],
    "babys": [
      {
        "name": "Apu",
        "sexe": "mâle",
      }
    ]
  },
  {
    "espece": "Chat de Geoffroy",
    "zoo": "Domaine des Fauves",
    "date": "17.05.2021",
    "parents": [
      "Xxxx",
      "Xxxx"
    ],
    "babys": [
      {
        "name": "Lima",
        "sexe": "femelle",
      }
    ]
  }
]

export default Born