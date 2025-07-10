window.addEventListener('DOMContentLoaded', () => {
  console.log("[renderer] DOM loaded");


  const minBtn = document.getElementById('minimize');
  const closeBtn = document.getElementById('close');
  const timer = document.getElementById('timer');
  const collapsedContent = document.getElementById('collapsedContent');
  const mainContent = document.getElementById('mainContent');
  const windowButtons = document.getElementById('window-buttons');
  const timerArea = document.getElementById('timerArea');
  const indexBG = document.getElementById('indexBG');

  // Check if preload exposed the API
  if (window.windowControls) {
    console.log("[renderer] windowControls found");

    minBtn.addEventListener('click', () => {
      window.windowControls.toggleWindowSize();

      //window.windowControls.resizeWindow(400, 70);  // Change to desired size
      //window.windowControls.minimize();
          window.windowControls.onWindowStatus((event, isResized) => {
        if (isResized) {
          indexBG.style.height = '140px';
          collapsedContent.classList.add('visible');
          timer.classList.add("small");
          mainContent.style.display = 'none';
          collapsedContent.style.display = 'inline';
          closeBtn.style.margin = '0 0 0 4px';


          collapsedContent.appendChild(timer);
          collapsedContent.appendChild(minBtn);
          collapsedContent.appendChild(closeBtn);
          if (!document.getElementById('froggyC')) {
            const img = document.createElement('img');
            img.src = '../assets/images/Sprite-0002.gif';
            img.id = 'froggyC';
            img.style.position = 'absolute';
            img.style.top = '-48px';
            img.style.right = '50px';
            collapsedContent.appendChild(img);
          }
        } else {
          indexBG.style.height = '280px';
          collapsedContent.classList.remove('visible');
          timer.classList.remove("small");
          collapsedContent.style.display = 'none';
          mainContent.style.display = 'block';
          
          timerArea.innerHTML = "";
          timerArea.appendChild(timer);
          timerArea.style.margin = '0 0 20px 0';;
          windowButtons.appendChild(minBtn);
          windowButtons.appendChild(closeBtn);
        }
      });
    });
    closeBtn.addEventListener('click', () => {
      window.windowControls.close();
    });
  } else {
    console.warn('windowControls not available!');
  }
});

  const context = new AudioContext();
  const clickSound = document.getElementById('clickSound');
  const source = context.createMediaElementSource(clickSound);

  const gainNode = context.createGain();
  gainNode.gain.value = 2.3;

  source.connect(gainNode);
  gainNode.connect(context.destination);

function modeSelection(selection) {
  if (selection === "qr"){
    const audio = document.getElementById('clickSound');
    audio.currentTime = 0;
    audio.play();
    setTimeout (() => {
      window.location.href = "quickReview.html";
    }, 280);
  } else if (selection === "inDepth"){
    const audio = document.getElementById('clickSound');
    audio.currentTime = 0;
    audio.play();
    setTimeout (() => {
      window.location.href = "inDepth.html";
    }, 280);
  } else {
    const audio = document.getElementById('clickSound');
    audio.currentTime = 0;
    audio.play();
    setTimeout (() => {
      window.location.href = "lockIn.html";
    }, 280);
  }
}

function homeButton() {
  const audio = document.getElementById('clickSound');
    audio.currentTime = 0;
    audio.play();
    setTimeout (() => {
      window.location.href = "index.html";
    }, 280);
}


