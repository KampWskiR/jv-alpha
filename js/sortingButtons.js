function modifyContent() {
    var windowWidth = window.innerWidth || document.documentElement.clientWidth;
    var targetElement = document.getElementById('sortcontent');

    if (windowWidth < 1025) {
        targetElement.innerHTML = `
    <div class="sorting">
    <a class="sortleft">Sort by</a>
    <select class="sortright" id="sorting-method">
      <option value="bottom-to-top">Past to Recent</option>
      <option value="top-to-bottom">Recent to Past</option>
      <option value="smallest-golden-value">Lowest Value</option>
      <option value="biggest-golden-value">Highest Value</option>
    </select>
    </div

    <div class="sorting">
    <a class="sortleft">Category</a>
    <select class="sortright" id="category">
      <option value="all">All</option>
      <option value="new">New</option>
      <option value="limited">Limited</option>
      <option value="dungeon">Dungeon</option>
      <option value="secret">Secret</option>
    </select>
    </div>

    <div class="sorting">
    <a class="sortleft">Show Strength</a>
    <select class="sortright" id="strength">
      <option value="on">On</option>
      <option value="off">Off</option>
    </select>
    </div>
        `;
    } else {
        targetElement.innerHTML = `
    <div class="sorting-container">
      <div class="sorting">
      <a class="sortleft">Sort by</a>
      <select class="sortright" id="sorting-method">
        <option value="bottom-to-top">Past to Recent</option>
        <option value="top-to-bottom">Recent to Past</option>
        <option value="smallest-golden-value">Lowest Value</option>
        <option value="biggest-golden-value">Highest Value</option>
      </select>
      </div>
  
      <div class="sorting">
      <a class="sortleft">Category</a>
      <select class="sortright" id="category">
        <option value="all">All</option>
        <option value="new">New</option>
        <option value="limited">Limited</option>
        <option value="dungeon">Dungeon</option>
        <option value="secret">Secret</option>
      </select>
      </div>
  
      <div class="sorting">
      <a class="sortleft">Show Strength</a>
      <select class="sortright" id="strength">
        <option value="on">On</option>
        <option value="off">Off</option>
      </select>
      </div>
    </div>
`;
    }
}

window.addEventListener('resize', modifyContent);

modifyContent()