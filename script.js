// script.js

function startProject(environment) {
    switch(environment) {
      case 'html':
        window.location.href = 'html_editor.html'; // Link to HTML/CSS/JS IDE page
        break;
      case 'python':
        window.location.href = 'python_editor.html'; // Link to Python IDE page (to be created)
        break;
      case 'node':
        window.location.href = 'node_editor.html'; // Link to Node.js IDE page (to be created)
        break;
      case 'react':
        window.location.href = 'react_editor.html'; // Link to React.js IDE page (to be created)
        break;
      default:
        alert('Environment not found!');
    }
  }
  