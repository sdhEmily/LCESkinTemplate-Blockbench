Plugin.register("lce_skin_template", {
    title: "LCE Skin Template",
    author: "sdhEmily",
    version: "1.2.0",
    variant: "both",

    onload() {
        const model = {"name":"Legacy Console Skin","meta":{"format_version":"4.5","model_format":"bedrock","box_uv":true},"resolution":{"width":64,"height":64},"elements":[{"name":"cube","box_uv":true,"rescale":false,"mirror_uv":false,"locked":false,"inflate":0.0,"from":[-4.0,24.0,-4.0],"to":[4.0,32.0,4.0],"uv_offset":[0,0],"type":"cube","uuid":"bc14c2e6-de79-4582-b664-03f5843b4f78","visibility":true},{"name":"cube","box_uv":true,"rescale":false,"mirror_uv":false,"locked":false,"inflate":0.5,"from":[-4.0,24.0,-4.0],"to":[4.0,32.0,4.0],"uv_offset":[32,0],"type":"cube","uuid":"95663b06-9d1f-47f8-87e2-cd2b8fca3738","visibility":true},{"name":"cube","box_uv":true,"rescale":false,"mirror_uv":false,"locked":false,"inflate":0.0,"from":[-4.0,12.0,-2.0],"to":[4.0,24.0,2.0],"uv_offset":[16,16],"type":"cube","uuid":"69062505-0e13-44b5-a764-c7a45e0118b5","visibility":true},{"name":"cube","box_uv":true,"rescale":false,"mirror_uv":false,"locked":false,"inflate":0.25,"from":[-4.0,12.0,-2.0],"to":[4.0,24.0,2.0],"uv_offset":[16,32],"type":"cube","uuid":"44eb51a3-7c82-4919-82cc-55a638f1b156","visibility":true},{"name":"cube","box_uv":true,"rescale":false,"mirror_uv":false,"locked":false,"inflate":0.0,"from":[4.0,12.0,-2.0],"to":[8.0,24.0,2.0],"uv_offset":[40,16],"type":"cube","uuid":"ff45ae84-3818-49c3-8103-78790965a6da","visibility":true},{"name":"cube","box_uv":true,"rescale":false,"mirror_uv":false,"locked":false,"inflate":0.25,"from":[4.0,12.0,-2.0],"to":[8.0,24.0,2.0],"uv_offset":[40,32],"type":"cube","uuid":"4630fe91-0f3d-4e12-aef1-5b8059b7a0b9","visibility":true},{"name":"cube","box_uv":true,"rescale":false,"mirror_uv":false,"locked":false,"inflate":0.0,"from":[-8.0,12.0,-2.0],"to":[-4.0,24.0,2.0],"uv_offset":[32,48],"type":"cube","uuid":"9614d8dd-3304-4043-8dca-5a6ffc31b7a0","visibility":true},{"name":"cube","box_uv":true,"rescale":false,"mirror_uv":false,"locked":false,"inflate":0.25,"from":[-8.0,12.0,-2.0],"to":[-4.0,24.0,2.0],"uv_offset":[48,48],"type":"cube","uuid":"1cba26c7-79f2-4a8e-b99b-2f0766045d14","visibility":true},{"name":"cube","box_uv":true,"rescale":false,"mirror_uv":false,"locked":false,"inflate":0.0,"from":[0.0,0.0,-2.0],"to":[4.0,12.0,2.0],"uv_offset":[0,16],"type":"cube","uuid":"25ac2ab7-5585-4860-9291-e97b3ae30e42","visibility":true},{"name":"cube","box_uv":true,"rescale":false,"mirror_uv":false,"locked":false,"inflate":0.25,"from":[0.0,0.0,-2.0],"to":[4.0,12.0,2.0],"uv_offset":[0,32],"type":"cube","uuid":"54f2b514-36fa-4273-829a-7feb9854627e","visibility":true},{"name":"cube","box_uv":true,"rescale":false,"mirror_uv":false,"locked":false,"inflate":0.0,"from":[-4.0,0.0,-2.0],"to":[0.0,12.0,2.0],"uv_offset":[16,48],"type":"cube","uuid":"dc15dad1-8339-4004-b674-e93084dec551","visibility":true},{"name":"cube","box_uv":true,"rescale":false,"mirror_uv":false,"locked":false,"inflate":0.25,"from":[-4.0,0.0,-2.0],"to":[0.0,12.0,2.0],"uv_offset":[0,48],"type":"cube","uuid":"99d0b52f-88ac-4935-8d1a-19050af2fe11","visibility":true}],"outliner":[{"name":"HEAD","origin":[0.0,24.0,0.0],"rotation":null,"uuid":"4221e158-8338-424e-adc6-a53ee8c72f88","children":["bc14c2e6-de79-4582-b664-03f5843b4f78","95663b06-9d1f-47f8-87e2-cd2b8fca3738"]},{"name":"BODY","origin":[0.0,24.0,0.0],"rotation":null,"uuid":"4110d9dd-9114-4be1-ae4d-0632ada65b69","children":["69062505-0e13-44b5-a764-c7a45e0118b5","44eb51a3-7c82-4919-82cc-55a638f1b156"]},{"name":"ARM0","origin":[6.0,22.0,0.0],"rotation":null,"uuid":"511a4e79-d80e-44be-94ba-cfac7a42ce3f","children":["ff45ae84-3818-49c3-8103-78790965a6da","4630fe91-0f3d-4e12-aef1-5b8059b7a0b9"]},{"name":"ARM1","origin":[-6.0,22.0,0.0],"rotation":null,"uuid":"4fc1b56b-d5d7-45b3-848f-b5782a8e0e42","children":["9614d8dd-3304-4043-8dca-5a6ffc31b7a0","1cba26c7-79f2-4a8e-b99b-2f0766045d14"]},{"name":"LEG0","origin":[2.0,12.0,0.0],"rotation":null,"uuid":"8898a941-88e2-4b85-b5c8-c4314d8e0f89","children":["25ac2ab7-5585-4860-9291-e97b3ae30e42","54f2b514-36fa-4273-829a-7feb9854627e"]},{"name":"LEG1","origin":[-2.0,12.0,0.0],"rotation":null,"uuid":"9b89ccd4-57a9-461b-bbf3-9aab3b164ec9","children":["dc15dad1-8339-4004-b674-e93084dec551","99d0b52f-88ac-4935-8d1a-19050af2fe11"]}],"textures":[{"name":null,"source":"data:image/png;base64,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"}],"model_identifier":""};
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
                                <p>LCE Skins have some limitations to keep in mind. No rotation is supported, no decimal sizes and the texture size is capped at 32kb otherwise other players will crash.</p>
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
