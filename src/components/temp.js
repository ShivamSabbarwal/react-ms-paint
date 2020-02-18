storage.get(
  {
    width: default_canvas_width,
    height: default_canvas_height
  },
  (err, stored_values) => {
    if (err) {
      return;
    }
    my_canvas_width = stored_values.width;
    my_canvas_height = stored_values.height;

    make_or_update_undoable(
      {
        match: history_node => history_node.name === "New Document",
        name: "Resize New Document Canvas",
        icon: get_help_folder_icon("p_stretch_both.png")
      },
      () => {
        canvas.width = Math.max(1, my_canvas_width);
        canvas.height = Math.max(1, my_canvas_height);
        ctx.disable_image_smoothing();
        if (!transparency) {
          ctx.fillStyle = colors.background;
          ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
        $canvas_area.trigger("resize");
      }
    );
  }
);
