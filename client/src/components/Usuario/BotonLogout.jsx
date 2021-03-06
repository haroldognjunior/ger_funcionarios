import React from "react";
import { connect } from "react-redux";
import { logout } from "../../actions/userActions";
import { IoMdLogOut } from "react-icons/io";

function BotonLogout({ logout}) {
  function desloguear() {
    logout();
  }

  return (
    <div>
      <IoMdLogOut
        className="btn"
        type="button"
        size={60}
        onClick={desloguear}
        color="red"
      />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    usuario: state.usuario.usuarioConectado,
  };
}

export default connect(mapStateToProps, { logout })(BotonLogout);
