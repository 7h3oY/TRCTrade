import Favorito from "./favorito";
import Moto from "./moto";
import Puja from "./puja";
import Usuario from "./usuario";

//RELACIÓN ENTRE 1 A MUCHOS USUARIO Y MOTO
Usuario.hasMany(Moto, {
    as: "Remates",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
    foreignKey: "id_vendedor",
});
Moto.belongsTo(Usuario, { as: "vendedor" });

//RELACIÓN ENTRE 1 A MUCHOS USUARIO Y FAVORITO
Usuario.hasMany(Favorito, {
    as: "favoritos",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
    foreignKey: "id_usuario",
});

Favorito.belongsTo(Usuario, {
    as: "usuario",
    foreignKey: "id_usuario",
});

Moto.hasMany(Favorito, {
    as: "favoritos",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
    foreignKey: "id_moto",
});

Favorito.belongsTo(Moto, {
    as: "moto",
    foreignKey: "id_moto",
});

Usuario.hasMany(Puja, {
    as: "Puja",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
    foreignKey: "id_pujador",
});
Puja.belongsTo(Usuario, { as: "pujador" });