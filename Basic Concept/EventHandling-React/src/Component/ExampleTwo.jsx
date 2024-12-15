import React from "react";
const HanleOne = () => {
  alert("Don't copy my content");
};
const hadle = () => {
     alert("Mouse hover")
}
const ExampleTwo = () => {
  return (
    <div>
      <p onCopy={HanleOne}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam iste
        consequuntur sequi ea possimus quas sit. Fugit ea, dolorum
        exercitationem quia est velit a esse illum ex debitis officia possimus
        mollitia. Quae voluptates, quibusdam expedita, veniam esse distinctio
        reiciendis laudantium quis laboriosam voluptate harum voluptatum animi
        consequatur dolor fuga maxime, nam soluta! Aliquam ea blanditiis
        perferendis et quia voluptas dolorem numquam suscipit labore,
        consequuntur autem magnam maiores ducimus mollitia dolore consequatur
        minus vero accusamus ut? Ex nesciunt excepturi fuga dolor, facilis
        quibusdam quam ipsa modi, quidem odit aspernatur eos saepe itaque
        perferendis earum voluptate ratione inventore, optio aperiam amet sint.
      </p>
      <p onMouseMove={hadle}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione vero
        sunt laudantium sapiente tempora quod dolores sint fugit fuga at, facere
        veritatis impedit dicta tempore odit explicabo magni aspernatur soluta
        asperiores. Voluptates voluptatum laboriosam id corrupti minima
        inventore, et exercitationem placeat neque ipsum excepturi ducimus
        incidunt obcaecati in doloremque accusantium veritatis, necessitatibus
        veniam, esse repellendus alias amet cumque voluptatem? Omnis voluptatum
        quo minus nisi est sint sunt dolore quis, ea accusamus cum possimus
        vitae labore, ullam molestias numquam harum at doloribus perferendis
        illum quibusdam quia optio. Architecto neque odit sint? A, voluptas
        vitae! Nulla, ea minus commodi minima fugit neque?
      </p>
    </div>
  );
};

export default ExampleTwo;
