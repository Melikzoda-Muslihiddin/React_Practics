function Header(){
    return (
        <div className="header">
            <div className="top">
                <div className="logo">
                    <img className="logoImg" src="./images/1.svg" alt="" />
                    <p className="vxod" style={{fontSize:"12px"}}>Аналитика и оцифровка продаж <br /><span style={{color:"#702A8A"}}><b>Wildberries</b></span> и <span style={{color: "#1065FF"}}><b>Ozon</b></span></p>
                </div>
                <div className="top1 vxod">
                    <a style={{color:"gray"}}>О нас</a>
                    <a style={{color:"gray"}}>Возможности</a>
                    <a style={{color:"gray"}}>Тарифы</a>
                </div>
                <div className="btns">
                    <button className="btnLog"><img className="imgBtnLog" src="./images/vixod.png" alt="" /><span className="vxod"><b>Вход</b></span></button>
                    <button className="btnReg">Зарегистрироваться</button>
                    <img className="menuImg" src="./images/menu.png" alt="" />
                </div>
            </div>
            <div className="headerBody">
                <div className="bodyLeft">
                    <h1><span style={{color:"#2EB897"}}>Внутренняя аналитика</span> и <span style={{color:"#2A84EE"}}>финансовый учёт</span> для бизнеса на маркетплейсах <img className="wb_ozon" src="./images/2.png" alt="" /></h1>
                    <p style={{color:"gray",width:"500px"}}>Увеличивай прибыль, автоматизируй рутину и экономь время на сборе и анализе отчётов</p>
                    <div className="prob">
                        <p style={{color:"white"}}>Начните свой 3-дневный пробный период с неограниченным доступом ко всем возможностям</p>
                        <label><input className="lab" placeholder="Enter your email..." type="email"/><button className="lab1"><span className="rob">Попробовать</span></button></label>
                    </div>
                </div>
                <div className="bodyRight">
                    <img className="km" src="./images/karobka_min.png" alt="" />
                    <img className="img3" src="./images/3.png" alt="" />
                    <img className="kb" src="./images/karobka_big.png" alt="" />
                </div>
            </div>
        </div>
    )
}
export default Header