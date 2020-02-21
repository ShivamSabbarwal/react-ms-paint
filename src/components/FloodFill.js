export const FloodFill = (ctx, x, y, color) => {
  let pixel_stack = [{ x: x, y: y }];

  let pixels = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
  let linear_cords = (y * ctx.canvas.width + x) * 4;
  let original_color = {
    r: pixels.data[linear_cords],
    g: pixels.data[linear_cords + 1],
    b: pixels.data[linear_cords + 2],
    a: pixels.data[linear_cords + 3]
  };

  while (pixel_stack.length > 0) {
    let new_pixel = pixel_stack.shift();
    let x = new_pixel.x;
    let y = new_pixel.y;

    // console.log( x + ", " + y ) ;

    linear_cords = (y * ctx.canvas.width + x) * 4;
    while (
      y-- >= 0 &&
      pixels.data[linear_cords] === original_color.r &&
      pixels.data[linear_cords + 1] === original_color.g &&
      pixels.data[linear_cords + 2] === original_color.b &&
      pixels.data[linear_cords + 3] === original_color.a
    ) {
      linear_cords -= ctx.canvas.width * 4;
    }
    linear_cords += ctx.canvas.width * 4;

    y++;

    let reached_left = false;
    let reached_right = false;
    while (
      y++ < ctx.canvas.height &&
      pixels.data[linear_cords] === original_color.r &&
      pixels.data[linear_cords + 1] === original_color.g &&
      pixels.data[linear_cords + 2] === original_color.b &&
      pixels.data[linear_cords + 3] === original_color.a
    ) {
      pixels.data[linear_cords] = color.r;
      pixels.data[linear_cords + 1] = color.g;
      pixels.data[linear_cords + 2] = color.b;
      pixels.data[linear_cords + 3] = 255;
      if (x > 0) {
        if (
          pixels.data[linear_cords - 4] === original_color.r &&
          pixels.data[linear_cords - 4 + 1] === original_color.g &&
          pixels.data[linear_cords - 4 + 2] === original_color.b &&
          pixels.data[linear_cords - 4 + 3] === original_color.a
        ) {
          if (!reached_left) {
            pixel_stack.push({
              x: x - 1,
              y: y
            });
            reached_left = true;
          }
        } else if (reached_left) {
          reached_left = false;
        }
      }
      if (x < ctx.canvas.width - 1) {
        if (
          pixels.data[linear_cords + 4] === original_color.r &&
          pixels.data[linear_cords + 4 + 1] === original_color.g &&
          pixels.data[linear_cords + 4 + 2] === original_color.b &&
          pixels.data[linear_cords + 4 + 3] === original_color.a
        ) {
          if (!reached_right) {
            pixel_stack.push({
              x: x + 1,
              y: y
            });
            reached_right = true;
          }
        } else if (reached_right) {
          reached_right = false;
        }
      }
      linear_cords += ctx.canvas.width * 4;
    }
  }
  ctx.putImageData(pixels, 0, 0);
};


