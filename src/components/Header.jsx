export default function Header() {
    return (
      <header className="flex justify-around border-b-4 border-blue-400">
  
  
        <a className="self-center" href="#home">
          <img className="inline-block w-18" src="https://img.icons8.com/?size=100&id=zSkutYYVkCzj&format=png&color=000000" alt="foodDeliveryICON" />
          <h1 className="bg-blue-100 font-bold text-2xl inline-block">Food Delivery App</h1>
        </a>
      
        
        
        <nav className="self-center">
          <a className="m-3" href="">
            <img className="inline-block w-10"  src="https://img.icons8.com/?size=100&id=132&format=png&color=000000" alt="" />Search</a>
            
          <a className="m-3" href="">
          <img className="inline-block w-10"  src="https://i.pinimg.com/736x/2c/41/96/2c41967c1fff588f834fa8b86a2b3e91.jpg" alt="" />Offers</a>
  
          <a className="m-3" href=""><img className="inline-block w-10"  src="https://img.icons8.com/?size=100&id=646&format=png&color=000000" alt="" />Help</a>
  
          <a className="m-3" href=""><img className="inline-block w-10"  src="https://img.icons8.com/?size=100&id=26218&format=png&color=000000" alt="" />Sign In</a>
  
          <a className="m-3" href=""><img className="inline-block w-10"  src="https://img.icons8.com/?size=100&id=9671&format=png&color=000000" alt="" />Cart</a>
        </nav>
      </header>
    );
  }