var ShaderSource = {"basic_vertex":"precision mediump float;\n\nattribute vec2 a_position;\nattribute vec2 a_tex_coord;\n\nuniform vec2 u_resolution;\nuniform mat3 u_model_view;\n\nvarying vec2 v_tex_coord;\n\nuniform bool u_flip_x;\n\nvoid main() {\n    vec3 world_pos = u_model_view * vec3(a_position, 1);\n    vec2 tex_pos = vec2(world_pos)/u_resolution;\n    vec2 pos = (2.0*tex_pos - 1.0) * vec2(1.0, -1.0);\n    gl_Position = vec4(pos, 0, 1);\n    gl_PointSize = 10.0;\n\n    v_tex_coord = a_tex_coord;\n    \n}\n","colour_fragment":"precision mediump float;\n\nuniform vec4 u_colour;\n\nvoid main() {\n    gl_FragColor = u_colour;\n}\n","red_fragment":"precision mediump float;\n\nvoid main() {\n    gl_FragColor = vec4(1,0,0,1);\n}\n","texture_fragment":"precision mediump float;\n\nvarying vec2 v_tex_coord;\nuniform vec4 u_colour;\nuniform sampler2D u_texture;\n\nuniform bool u_use_texture;\n\nvoid main() {\n    if (u_use_texture) {\n        gl_FragColor = texture2D(u_texture, v_tex_coord);\n    } else {\n        gl_FragColor = u_colour;\n    }\n}\n\n"}