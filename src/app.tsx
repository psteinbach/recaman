import {CanvasSpace, IPlayer, Pt} from "pts";
import { generate } from "./recaman-generator/recaman-generator";

const background = "#364968"
const primary = "#fddf97"
const secondary = "#e09664"
const tertiary = "#6c4343"


var space = new CanvasSpace("#pts").setup({bgcolor: background, resize: true, retina: true});
var form = space.getForm();
var p: IPlayer;

let landmarks : any;
let recamanSequence = generate(101);
const points = recamanSequence.map((num) => {
  return new Pt((num * 20) + 500, space.center.y)
});



space.add(() => {

  let flip = false;
  let prev = points[0];

  points.map((p:Pt) =>
  {
    form.strokeOnly(primary, 30)
    .arc(
      new Pt([(p.x + prev.x) / 2, space.center.y - .5]), 
      (Math.abs(p.x - prev.x) / 2), 
      0,
      Math.PI, 
      flip
    );
    form.strokeOnly(secondary, 20)
    .arc(
      new Pt([(p.x + prev.x) / 2, space.center.y - .5]), 
      (Math.abs(p.x - prev.x) / 2), 
      0,
      Math.PI, 
      flip
    );
    form.strokeOnly(tertiary, 10)
    .arc(
      new Pt([(p.x + prev.x) / 2, space.center.y - .5]), 
      (Math.abs(p.x - prev.x) / 2), 
      0,
      Math.PI, 
      flip
    );


    prev = p;
    flip = !flip;
  });
});

space.bindMouse().bindTouch().play();