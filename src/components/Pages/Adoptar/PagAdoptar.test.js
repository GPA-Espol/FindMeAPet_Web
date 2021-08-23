import React from "react";
import { shallow, mount, render } from 'enzyme';
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { render, querySelector } from "@testing-library/react";
import PagAdoptar, {
  ConstructAnimalCard,
  ConstructOption,
  NoneCard,
  CheckResults,
} from "./PagAdoptar";
import AnimalModal from './AnimalModal/AnimalModal';

/**
 * Se siguio el sgte video: https://www.youtube.com/watch?v=KYjjtRgg_H0
 * Las dos formas de hacer un test recomendado por el video (hacen lo mismo)
 * component.getByText(encabezado1);
 * expect(component.container).toHaveTextContent(encabezado1);
 */

/**
 * <PagAdoptar />
 * Test if the animal cards of Página Adoptar is renderizing
 */
describe('<PagAdoptar />', () => {
  it('renders content', () => {
    let filters = {
      edad: "Adulto",
      color: "Color",
      sexo: "Hembra",
      tipo: "Gato",
      animales: [],
      animalSelected: undefined,
    };
    const noAnimals = "No hay gatitos con esas caractrísticas (por ahora :))!";

    const wrapper = render(<PagAdoptar state={filters}/>);
    expect(wrapper.find('.no-results').first().text()).toEqual(noAnimals);
  });

  it('renders content with filters', async () => {
    let filters = {
          edad: "Cachorro",
          color: "Color",
          sexo: "Hembra",
          tipo: "Gato",
          animales: [],
          animalSelected: undefined,
        };
    const wrapper = shallow(<PagAdoptar state={filters} />);
    await wrapper.instance().componentDidMount();
    const cards = wrapper.find(ConstructAnimalCard);
    // console.log(cards.debug());
    expect(cards).toHaveLength(3);
  });
});

describe('<ConstructAnimalCard />', () => {
  it('Test if an Animal Card is built', () => {
    const pet = {
      id:1,
      nombre:"Mila",
      fecha_nacimiento:"2021-04-27",
      color:"Blanco",
      is_esterilizado:false,
      is_adoptado:false,
      is_caso_externo:false,
      is_adoptable:true,
      descripcion:"Es carinosa",
      sexo:"H",
      fecha_adopcion:null,
      ubicacion:"FCV",
      tipo_mascota:"Gato",
      imagen_url:"https://firebasestorage.googleapis.com/v0/b/gpa-findmepet.appspot.com/o/mila.jpeg?alt=media&token=0fa957b8-89a1-49a6-bd41-6c1dc41fdb9f","categoria_edad":"juvenil"
    };

    const wrapper = shallow(<ConstructAnimalCard item={pet} index={0} />);
    const htmlToCompare = `<div tabindex="0"><div class="hover hover-2 text-white rounded"><img src="" alt=""/><div class="hover-overlay"></div><div class="hover-2-content px-5 py-4"><h3 class="hover-2-title text-uppercase font-weight-bold mb-0"><span class="font-weight-light">Mila</span></h3><p class="hover-2-description mb-0">EDAD: Juvenil <br/>SEXO: Hembra <br/><br/>DESCRIPCIÓN: <br/>Es carinosa. Conoce al nuevo miembro de tu familia.</p><img class="cat-image" src="https://firebasestorage.googleapis.com/v0/b/gpa-findmepet.appspot.com/o/mila.jpeg?alt=media&amp;token=0fa957b8-89a1-49a6-bd41-6c1dc41fdb9f" alt=""/></div></div></div>`;
    
    expect(wrapper.html()).toEqual(htmlToCompare);
      
  });
});

describe('<ConstructOption />', () => {
  it('Test if an Option is built', () => {
    const key = 0;
    const value = "Opcion 1";
    const wrapper = shallow(<ConstructOption value={value} index={key} />);
    const htmlToCompare = `<option value="Opcion 1">Opcion 1</option>`;
    expect(wrapper.html()).toEqual(htmlToCompare);
  })
})

describe('<NoneCard /> />', () => {
  it('Test if an Option is built', () => {
    const key = 0;
    const wrapper = shallow(<NoneCard index={key} />);
    const htmlToCompare = `<span class=\"d-none\">No se muestra</span>`;
    expect(wrapper.html()).toEqual(htmlToCompare);
  })
})

describe('<CheckResults />', () => {
  it('Test if the HTML object if there are no results from the filters', () => {
    let wrapper = shallow(<CheckResults noResults={true} />);
    const htmlToCompare = `<div class=\"no-results\"><p>No hay gatitos con esas caractrísticas (por ahora :))!</p></div>`;
    expect(wrapper.html()).toEqual(htmlToCompare);
  })

  it('Test if the HTML object if there are no results from the filters 2', () => {
    let wrapper = shallow(<CheckResults noResults={false} />);
    const htmlToCompare = `<span class=\"d-none\">No se muestra</span>`;
    expect(wrapper.html()).toEqual(htmlToCompare);
  })
})


describe('<AnimalModal />', () => {
  it('Test if the HTML object of AnimalModal is rendering', () => {
    const pet = {
      id:1,
      nombre:"Mila",
      fecha_nacimiento:"2021-04-27",
      color:"Blanco",
      is_esterilizado:false,
      is_adoptado:false,
      is_caso_externo:false,
      is_adoptable:true,
      descripcion:"Es carinosa",
      sexo:"H",
      fecha_adopcion:null,
      ubicacion:"FCV",
      tipo_mascota:"Gato",
      imagen_url:"https://firebasestorage.googleapis.com/v0/b/gpa-findmepet.appspot.com/o/mila.jpeg?alt=media&token=0fa957b8-89a1-49a6-bd41-6c1dc41fdb9f","categoria_edad":"juvenil"
    };

    let wrapper = shallow(<Router><AnimalModal data={pet} stateMethod={() => undefined}/></Router>);
    const htmlToCompare = `<div class=\"animal-modal-container\"><div class=\"animal-modal-background\"><div class=\"animal-modal\"><div class=\"modal-image\"><img class=\"pet-image\" src=\"https://firebasestorage.googleapis.com/v0/b/gpa-findmepet.appspot.com/o/mila.jpeg?alt=media&amp;token=0fa957b8-89a1-49a6-bd41-6c1dc41fdb9f\" alt=\"imagen mascota\"/></div><div class=\"modal-info\"><div class=\"modal-pair name\"><div></div><p class=\"field-value name\">Mila</p><i class=\"fas fa-times fa-2x\"></i></div><div class=\"modal-pair birthdate\"><p class=\"modal-field birthdate\">Fecha de nacimiento:</p><p class=\"field-value birthdate\">2021-04-27</p></div><div class=\"modal-pair color\"><p class=\"modal-field color\">Color: </p><p class=\"field-value color\">Blanco</p></div><div class=\"modal-pair esterilizado\"><p class=\"modal-field esterilizado\">Esterilización: </p><p class=\"field-value esterilizado\">No está esterilizado</p></div><div class=\"modal-pair description\"><p class=\"modal-field description\">Descripción: </p><div class=\"description-box\"><p class=\"description-text\">Es carinosa</p></div></div><div class=\"adoptar-button-container\"><a href=\"/formulario\"><button class=\"MuiButtonBase-root MuiButton-root MuiButton-contained\" tabindex=\"0\" type=\"button\" style=\"color:#F5f5f5;background:rgb(227,93,38);font-weight:bold;height:50%\"><span class=\"MuiButton-label\">¡Adóptalo ya!</span></button></a></div></div></div></div></div>`;
    expect(wrapper.html()).toEqual(htmlToCompare);
  })
})


