import { Stats } from 'pixi-stats';
import {
  Application,
  Assets,
  Sprite
} from "pixi.js";



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
app.stage.scale.set(0.75);
app.stage.position.set(app.renderer.width/2 , app.renderer.height/2 )

    for (let i = 0; i < 100;i++){
      const example = new Sprite(Assets.cache.get("bunny.webp"));

      example.position.set(-app.renderer.width/2 + app.renderer.width/2 *Math.random() , -app.renderer.height/2 + app.renderer.height/2 *Math.random());

      app.stage.addChild(example);
    }

    app.ticker.add((dt)=>{
      app.stage.children.forEach((a)=>{
        a.x += dt * (-Math.PI + 2 * Math.PI * Math.random());
        a.y += dt * (-Math.PI + 2 * Math.PI * Math.random());
      })
    })

}

main();
