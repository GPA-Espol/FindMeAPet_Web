import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import PagAdoptar, {
  ConstructAnimalCard,
  ConstructOption,
  NoneCard,
  CheckResults,
} from "./PagAdoptar";

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
test("renders content", () => {
  let filters = {
    edad: "Gatito",
    color: "Naranja",
    sexo: "Hembra",
  };
  const noAnimals = "No hay gatitos con esas caractrísticas (por ahora :))!";

  const component = render(<PagAdoptar state={filters} />);
  component.getByText(noAnimals);

  filters = {
    edad: "Mayor",
    color: "Cafe",
    sexo: "Hembra",
  };
  const component1 = render(<PagAdoptar state={filters} />);
  component1.getByText("Mishi");
});

/**
 * <ConstructAnimalCard />
 * Test if an Animal Card is built
 */
test("Renders content of an Animal Card", () => {
  const animalObj = {
    nombre: "Peluso",
    descripcion:
      "Aquí podemos poner una corta descripción, aparte podemos poner campos como sexo, raza, etc.",
    imagen: "/Catalog/Gato_3.jpg",
    color: "Cafe",
    sexo: "Macho",
    edad: "Adulto",
    url: "/",
  };
  const key = 0;

  const component = render(
    <ConstructAnimalCard item={animalObj} index={key} />
  );

  expect(component.container).toMatchInlineSnapshot(`
    <div>
      <div
        class="my-card col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12"
        tabindex="0"
      >
        <div
          class="hover hover-2 text-white rounded"
        >
          <img
            alt=""
            src=""
          />
          <div
            class="hover-overlay"
          />
          <div
            class="hover-2-content px-5 py-4"
          >
            <h3
              class="hover-2-title text-uppercase font-weight-bold mb-0"
            >
              <span
                class="font-weight-light"
              >
                Peluso
              </span>
            </h3>
            <p
              class="hover-2-description text-uppercase mb-0"
            >
              Aquí podemos poner una corta descripción, aparte podemos poner campos como sexo, raza, etc.
            </p>
            <img
              alt="Imagen del gatito"
              class="cat-image"
              src="/Catalog/Gato_3.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  `);
});

/**
 * <ConstructOption />
 * Test if the HTML object of a none displayable card is shown
 */
test("Renders content of an option", () => {
  const key = 0;
  const value = "Opcion 1";

  const component = render(<ConstructOption value={value} index={key} />); // Se le puede hacer console.log(component)

  component.getByText(value);
});

/**
 * <NoneCard />
 * Test if the HTML object of a none displayable card is shown
 */
test("Renders content of NoneCard", () => {
  const index = 0;
  const texto = "No se muestra";

  const component = render(<NoneCard index={index} />);

  component.getByText(texto);
});

/**
 * <CheckResults />
 * Test if the HTML object if there are no results from the filters
 */
test("Renders content of CheckResults", () => {
  const message1 = "No hay gatitos con esas caractrísticas (por ahora :))!";
  const message2 = "No se muestra";
  const noResults = true;

  const component = render(<CheckResults noResults={noResults} />);

  component.getByText(message1);

  component.rerender(<CheckResults noResults={!noResults} />);

  component.getByText(message2);
});


