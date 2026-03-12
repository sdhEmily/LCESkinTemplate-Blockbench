Plugin.register("lce_skin_template", {
    title: "LCE Skin Template",
    description: "Loads a skin template compatible with PCK Studio.",
    author: "sdhEmily",
    icon: "fa-share-from-square",
    target: "Minecraft: Legacy Console Edition",
    about: `Basic plugin that adds a loader to load a skin template compatible with PCK Studio.
      <content class="markdown">
                            <h3>
                              <p>Good to know:</p>
                            </h3>
                            <p>
                            <ul>
                              <li>
                                <p>This template is designed to create Minecraft LCE skins.</p>
                              </li>
                              <li>
                                <p>LCE Skins have some limitations to keep in mind. No rotation is supported, no decimal sizes, the texture size is capped at 32kb otherwise other players will crash, and it's best to keep textures within powers of 2.</p>
                              </li>
                              <li>
                                <p>Make sure to export as a legacy project via <strong>File</strong> > <strong>Export</strong> > <strong>Export Legacy Project</strong> as PCK Studio doesn't support modern Blockbench projects.</p>
                              </li>
                            </ul>
                            </p>
                          </content>  
    `,
    min_version: "4.2.0",
    creation_date: "2026-03-11",
    version: "1.5.2",
    variant: "both",

    onload() {
        const model = {"meta":{"format_version":"4.10","model_format":"bedrock","box_uv":true},"name":"Legacy Console Skin","model_identifier":"","visible_box":[1,1,0],"variable_placeholders":"","variable_placeholder_buttons":[],"bedrock_animation_mode":"entity","timeline_setups":[],"unhandled_root_fields":{},"resolution":{"width":64,"height":64},"elements":[{"name":"cube","box_uv":true,"render_order":"default","locked":false,"allow_mirror_modeling":true,"from":[-4,24,-4],"to":[4,32,4],"autouv":0,"color":0,"origin":[0,0,0],"faces":{"north":{"uv":[8,8,16,16],"texture":0},"east":{"uv":[0,8,8,16],"texture":0},"south":{"uv":[24,8,32,16],"texture":0},"west":{"uv":[16,8,24,16],"texture":0},"up":{"uv":[16,8,8,0],"texture":0},"down":{"uv":[24,0,16,8],"texture":0}},"type":"cube","uuid":"bc14c2e6-de79-4582-b664-03f5843b4f78"},{"name":"cube","box_uv":true,"render_order":"default","locked":false,"allow_mirror_modeling":true,"from":[-4,24,-4],"to":[4,32,4],"autouv":0,"color":0,"inflate":0.5,"origin":[0,0,0],"uv_offset":[32,0],"faces":{"north":{"uv":[40,8,48,16],"texture":0},"east":{"uv":[32,8,40,16],"texture":0},"south":{"uv":[56,8,64,16],"texture":0},"west":{"uv":[48,8,56,16],"texture":0},"up":{"uv":[48,8,40,0],"texture":0},"down":{"uv":[56,0,48,8],"texture":0}},"type":"cube","uuid":"95663b06-9d1f-47f8-87e2-cd2b8fca3738"},{"name":"cube","box_uv":true,"render_order":"default","locked":false,"allow_mirror_modeling":true,"from":[-4,12,-2],"to":[4,24,2],"autouv":0,"color":1,"origin":[0,0,0],"uv_offset":[16,16],"faces":{"north":{"uv":[20,20,28,32],"texture":0},"east":{"uv":[16,20,20,32],"texture":0},"south":{"uv":[32,20,40,32],"texture":0},"west":{"uv":[28,20,32,32],"texture":0},"up":{"uv":[28,20,20,16],"texture":0},"down":{"uv":[36,16,28,20],"texture":0}},"type":"cube","uuid":"69062505-0e13-44b5-a764-c7a45e0118b5"},{"name":"cube","box_uv":true,"render_order":"default","locked":false,"allow_mirror_modeling":true,"from":[-4,12,-2],"to":[4,24,2],"autouv":0,"color":1,"inflate":0.25,"origin":[0,0,0],"uv_offset":[16,32],"faces":{"north":{"uv":[20,36,28,48],"texture":0},"east":{"uv":[16,36,20,48],"texture":0},"south":{"uv":[32,36,40,48],"texture":0},"west":{"uv":[28,36,32,48],"texture":0},"up":{"uv":[28,36,20,32],"texture":0},"down":{"uv":[36,32,28,36],"texture":0}},"type":"cube","uuid":"44eb51a3-7c82-4919-82cc-55a638f1b156"},{"name":"cube","box_uv":true,"render_order":"default","locked":false,"allow_mirror_modeling":true,"from":[4,12,-2],"to":[8,24,2],"autouv":0,"color":2,"origin":[0,0,0],"uv_offset":[40,16],"faces":{"north":{"uv":[44,20,48,32],"texture":0},"east":{"uv":[40,20,44,32],"texture":0},"south":{"uv":[52,20,56,32],"texture":0},"west":{"uv":[48,20,52,32],"texture":0},"up":{"uv":[48,20,44,16],"texture":0},"down":{"uv":[52,16,48,20],"texture":0}},"type":"cube","uuid":"ff45ae84-3818-49c3-8103-78790965a6da"},{"name":"cube","box_uv":true,"render_order":"default","locked":false,"allow_mirror_modeling":true,"from":[4,12,-2],"to":[8,24,2],"autouv":0,"color":2,"inflate":0.25,"origin":[0,0,0],"uv_offset":[40,32],"faces":{"north":{"uv":[44,36,48,48],"texture":0},"east":{"uv":[40,36,44,48],"texture":0},"south":{"uv":[52,36,56,48],"texture":0},"west":{"uv":[48,36,52,48],"texture":0},"up":{"uv":[48,36,44,32],"texture":0},"down":{"uv":[52,32,48,36],"texture":0}},"type":"cube","uuid":"4630fe91-0f3d-4e12-aef1-5b8059b7a0b9"},{"name":"cube","box_uv":true,"render_order":"default","locked":false,"allow_mirror_modeling":true,"from":[-8,12,-2],"to":[-4,24,2],"autouv":0,"color":3,"origin":[0,0,0],"uv_offset":[32,48],"faces":{"north":{"uv":[36,52,40,64],"texture":0},"east":{"uv":[32,52,36,64],"texture":0},"south":{"uv":[44,52,48,64],"texture":0},"west":{"uv":[40,52,44,64],"texture":0},"up":{"uv":[40,52,36,48],"texture":0},"down":{"uv":[44,48,40,52],"texture":0}},"type":"cube","uuid":"9614d8dd-3304-4043-8dca-5a6ffc31b7a0"},{"name":"cube","box_uv":true,"render_order":"default","locked":false,"allow_mirror_modeling":true,"from":[-8,12,-2],"to":[-4,24,2],"autouv":0,"color":3,"inflate":0.25,"origin":[0,0,0],"uv_offset":[48,48],"faces":{"north":{"uv":[52,52,56,64],"texture":0},"east":{"uv":[48,52,52,64],"texture":0},"south":{"uv":[60,52,64,64],"texture":0},"west":{"uv":[56,52,60,64],"texture":0},"up":{"uv":[56,52,52,48],"texture":0},"down":{"uv":[60,48,56,52],"texture":0}},"type":"cube","uuid":"1cba26c7-79f2-4a8e-b99b-2f0766045d14"},{"name":"cube","box_uv":true,"render_order":"default","locked":false,"allow_mirror_modeling":true,"from":[0,0,-2],"to":[4,12,2],"autouv":0,"color":4,"origin":[0,0,0],"uv_offset":[0,16],"faces":{"north":{"uv":[4,20,8,32],"texture":0},"east":{"uv":[0,20,4,32],"texture":0},"south":{"uv":[12,20,16,32],"texture":0},"west":{"uv":[8,20,12,32],"texture":0},"up":{"uv":[8,20,4,16],"texture":0},"down":{"uv":[12,16,8,20],"texture":0}},"type":"cube","uuid":"25ac2ab7-5585-4860-9291-e97b3ae30e42"},{"name":"cube","box_uv":true,"render_order":"default","locked":false,"allow_mirror_modeling":true,"from":[0,0,-2],"to":[4,12,2],"autouv":0,"color":4,"inflate":0.25,"origin":[0,0,0],"uv_offset":[0,32],"faces":{"north":{"uv":[4,36,8,48],"texture":0},"east":{"uv":[0,36,4,48],"texture":0},"south":{"uv":[12,36,16,48],"texture":0},"west":{"uv":[8,36,12,48],"texture":0},"up":{"uv":[8,36,4,32],"texture":0},"down":{"uv":[12,32,8,36],"texture":0}},"type":"cube","uuid":"54f2b514-36fa-4273-829a-7feb9854627e"},{"name":"cube","box_uv":true,"render_order":"default","locked":false,"allow_mirror_modeling":true,"from":[-4,0,-2],"to":[0,12,2],"autouv":0,"color":6,"origin":[0,0,0],"uv_offset":[16,48],"faces":{"north":{"uv":[20,52,24,64],"texture":0},"east":{"uv":[16,52,20,64],"texture":0},"south":{"uv":[28,52,32,64],"texture":0},"west":{"uv":[24,52,28,64],"texture":0},"up":{"uv":[24,52,20,48],"texture":0},"down":{"uv":[28,48,24,52],"texture":0}},"type":"cube","uuid":"dc15dad1-8339-4004-b674-e93084dec551"},{"name":"cube","box_uv":true,"render_order":"default","locked":false,"allow_mirror_modeling":true,"from":[-4,0,-2],"to":[0,12,2],"autouv":0,"color":6,"inflate":0.25,"origin":[0,0,0],"uv_offset":[0,48],"faces":{"north":{"uv":[4,52,8,64],"texture":0},"east":{"uv":[0,52,4,64],"texture":0},"south":{"uv":[12,52,16,64],"texture":0},"west":{"uv":[8,52,12,64],"texture":0},"up":{"uv":[8,52,4,48],"texture":0},"down":{"uv":[12,48,8,52],"texture":0}},"type":"cube","uuid":"99d0b52f-88ac-4935-8d1a-19050af2fe11"}],"outliner":[{"name":"HEAD","origin":[0,24,0],"bedrock_binding":"","color":0,"uuid":"4221e158-8338-424e-adc6-a53ee8c72f88","export":true,"mirror_uv":false,"isOpen":true,"locked":false,"visibility":true,"autouv":0,"selected":false,"children":["bc14c2e6-de79-4582-b664-03f5843b4f78","95663b06-9d1f-47f8-87e2-cd2b8fca3738"]},{"name":"BODY","origin":[0,24,0],"bedrock_binding":"","color":1,"uuid":"4110d9dd-9114-4be1-ae4d-0632ada65b69","export":true,"mirror_uv":false,"isOpen":true,"locked":false,"visibility":true,"autouv":0,"selected":false,"children":["69062505-0e13-44b5-a764-c7a45e0118b5","44eb51a3-7c82-4919-82cc-55a638f1b156"]},{"name":"ARM0","origin":[6,22,0],"bedrock_binding":"","color":2,"uuid":"511a4e79-d80e-44be-94ba-cfac7a42ce3f","export":true,"mirror_uv":false,"isOpen":true,"locked":false,"visibility":true,"autouv":0,"selected":false,"children":["ff45ae84-3818-49c3-8103-78790965a6da","4630fe91-0f3d-4e12-aef1-5b8059b7a0b9"]},{"name":"ARM1","origin":[-6,22,0],"bedrock_binding":"","color":3,"uuid":"4fc1b56b-d5d7-45b3-848f-b5782a8e0e42","export":true,"mirror_uv":false,"isOpen":true,"locked":false,"visibility":true,"autouv":0,"selected":false,"children":["9614d8dd-3304-4043-8dca-5a6ffc31b7a0","1cba26c7-79f2-4a8e-b99b-2f0766045d14"]},{"name":"LEG0","origin":[2,12,0],"bedrock_binding":"","color":4,"uuid":"8898a941-88e2-4b85-b5c8-c4314d8e0f89","export":true,"mirror_uv":false,"isOpen":true,"locked":false,"visibility":true,"autouv":0,"selected":false,"children":["25ac2ab7-5585-4860-9291-e97b3ae30e42","54f2b514-36fa-4273-829a-7feb9854627e"]},{"name":"LEG1","origin":[-2,12,0],"bedrock_binding":"","color":6,"uuid":"9b89ccd4-57a9-461b-bbf3-9aab3b164ec9","export":true,"mirror_uv":false,"isOpen":true,"locked":false,"visibility":true,"autouv":0,"selected":false,"children":["dc15dad1-8339-4004-b674-e93084dec551","99d0b52f-88ac-4935-8d1a-19050af2fe11"]}],"textures":[{"name":"steve.png","path":"","folder":"","namespace":"","id":"0","group":"","width":64,"height":64,"uv_width":64,"uv_height":64,"particle":false,"use_as_default":false,"layers_enabled":false,"sync_to_project":"","render_mode":"default","render_sides":"auto","pbr_channel":"color","frame_time":1,"frame_order_type":"loop","frame_order":"","frame_interpolate":false,"visible":true,"internal":true,"saved":false,"uuid":"ce6e24fb-2aa9-5a18-56ce-6208c0ecf744","source":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAC+ElEQVR4AexavYoUQRCu3UThLlLwFlZEUfEVLtfYQM0u8gnEn+gwMDDVdzBYzIwMFQzvAUwExR9c2BPTwzO5PWq4D5q6mqqZ673rnple+Kjuqa6vu76ug+6ZG5Pze//559LC/YfPlhYc+uRuVwBe4eaNy6SBjn7TjQlpOHJnbRoJkHUGkYsrAkQK2PnwUgGd38LIBBpVwM7X36QBc893F6QB/pzt+Pbi1dLC28VFsvDm5gWysP/tydJCanGqCtjcuEQasLirkzXSAP/atSukAf5z01ukAf6UthIg5QJSz91IgHtTIgYWy20G+l22jQTocoLe2hsJ8G5OxAAZtxnod9k2EqDLCXprrwTY2f1DGhD8Y7FHGuDf+/6LNMD/f/6FNMB/llbONf44eToK8fjvAwqxP3tBIWZ31kch1re3RyE+3d2iEB/+PaIQWy/HFEK+S5ALlH35bqJtvOSrKkA+xN0fz3HXR9+ziJcWceCTFn7PghfjwIN+G6sK0Iag62NVAXDuR3I456PvWcRLizjwSQu/Z8GLceBBv409dheQ5355zpfnenmPkPGyL/lmzw8oRFt+ySfjPTGqCsA9AINx7kcf53z0ca5Hvy4ePLAYX8cHXliMr+OHv44PfstWAlgD+u4rAvR9h738SgV4CvXdXyqg7zvs5VcqwFOo7/6qAvAuAMni7o8+7vro426Pfl08eGAxvo4PvLAYX8cPfx0f+z0cex8Q3vW5Hd71uX3++utRiPBdArc5xgJzhAi5tDZzhpDcIRe3JYcrgDeg7/7qT6DvSVr5FQEsdYbgKxUwhF22ciwVYKkzBF+pgCHsspVjqQBLnSH4SgUMYZetHHtXAVaymm/lAsR+v4+N15K0nq1cAJ4s9vt9bDyvoSlORYCmk+cw7lQEiP1+HxvfRthoAbz/D/C+38fGt0lWGxstAJPGfr+Pjec1nBQrEeCkk+cQVwTIYRdSrqFUQEr1c5i7VEAOu5ByDaUCUqqfw9wrqYDY7/cx8bEiHgIAAP//rCdZDQAAAAZJREFUAwCVozDeWe9Q4QAAAABJRU5ErkJggg=="}]}
        const createProject = () => {
            newProject(Formats[model.meta.model_format]);
            Codecs.project.parse(model);
        };
        const description = "PCK Studio Compatible Skin"
        this.loader = new ModelLoader("legacy_skin_template", {
            name: "Legacy Console Skin",
            description: description,
            tags: ["Minecraft: Legacy Console Edition", "PCK Studio", "Templates"],
            icon: "icon-player",
            onStart: createProject,
            format_page: {
                component: {
                    methods: {createProject},
                    template: `
                        <div style="display:flex;flex-direction:column;height:100%">
                          <p class="format_description">${description}</p>
                          <p class="format_target">
                            <b>Target</b> : <span>Minecraft: Legacy Console Edition</span> <span>PCK Studio</span>
                          </p>
                          <content class="markdown">
                            <h3>
                              <p>Good to know:</p>
                            </h3>
                            <p>
                            <ul>
                              <li>
                                <p>This template is designed to create Minecraft LCE skins.</p>
                              </li>
                              <li>
                                <p>LCE Skins have some limitations to keep in mind. No rotation is supported, no decimal sizes, the texture size is capped at 32kb otherwise other players will crash, and it's best to keep textures within powers of 2.</p>
                              </li>
                              <li>
                                <p>Make sure to export as a legacy project via <strong>File</strong> > <strong>Export</strong> > <strong>Export Legacy Project</strong> as PCK Studio doesn't support modern Blockbench projects.</p>
                              </li>
                            </ul>
                            </p>
                            <h3>
                              <p>Resources:</p>
                            </h3>
                            <p>
                            <ul>
                              <li>
                                <a href="https://youtu.be/xC81Q3HGraE">Skin Design Tutorial</a>
                              </li>
                            </ul>
                            </p>
                          </content>
                          <div class="button_bar">
                            <button id="create_new_model_button" @click="createProject()">
                              <i class="material-icons">arrow_forward</i> Create New Model </button>
                          </div>
                        </div>
                    `
                }
            }
        });
    },

    onunload() {
        this.loader.delete();
    }
});
