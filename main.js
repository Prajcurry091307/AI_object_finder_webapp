function preload()
    {
        video = createVideo(VIDEO);
        video.hide();
    }

function setup()
{
    canvas = createCanvas(470,300);
    canvas.center();
}
function draw()
{
    image(video,0,0,980,380)
}