import { Stats } from 'pixi-stats';
import {
  Application,
  Assets,
  Geometry,
  Mesh,
  Shader,
  Texture,
} from "pixi.js";

import vertexShader from "./base.vert?raw";

import fragmentShader from "./base.frag?raw";

async function main() {
  // Create PixiJS application
  const app = new Application({
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor: 0x2f3136,
    antialias: true,
    view: document.getElementById("pixiCanvas")! as HTMLCanvasElement,
  });

  await Assets.load("bunny.webp");
  await Assets.load("peach.webp");

  const stats = new Stats(app.renderer);

  const shader = Shader.from(vertexShader, fragmentShader, {
    uSampler2: Assets.cache.get("bunny.webp") as Texture,
  });

  const geometry = new Geometry()
    .addAttribute(
      "aVertexPosition", // the attribute name
      [
        -100,
        -100, // bottom-left
        100,
        -100, // bottom-right
        100,
        100, // top-right
        -100,
        100, // top-left
      ],
      2 // size of each vertex (x, y)
    )
    .addAttribute(
      "aUvs", // the attribute name
      [
        0,
        0, // bottom-left
        1,
        0, // bottom-right
        1,
        1, // top-right
        0,
        1, // top-left
      ],
      2 // size of each UV (u, v)
    )
    .addIndex([0, 1, 2, 0, 2, 3]); // indices that form two triangles for a quad

    for (let i = 0; i < 100;i++){
      const example = new Mesh(geometry, shader);

      example.position.set(app.renderer.width/2 - app.renderer.width/3 + app.renderer.width*2/3 *Math.random() , app.renderer.height/2- app.renderer.height/3 + app.renderer.height*2/3 *Math.random());

      app.stage.addChild(example);
    }

}

main();
