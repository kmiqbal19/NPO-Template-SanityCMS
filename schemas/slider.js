export default {
    name: "slider",
    title: "Slider"
    ,
    type: 'document',
    fields: [
        {
            name: 'imageurl',
            title: 'Image URL',
            type: 'image',
            options: {
                hotspot: true,
            }

        }
        ,{
            name: 'imagetitle',
            title: 'Image Title',
            type: 'string'
        }
    ]
}