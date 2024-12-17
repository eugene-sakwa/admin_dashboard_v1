//SIDEBAR TOGGLE

let sidebarOpen = false;
const sidebar = document.getElementById('sidebar');

const openSidebar = () => {
  if( !sidebarOpen){
    sidebar.classList.add('sidebar-responsive')
    sidebarOpen = true;
  }
}

const closeSidebar = () => {
  if( sidebarOpen){
    sidebar.classList.remove('sidebar-responsive')
    sidebarOpen = false;
  }
}