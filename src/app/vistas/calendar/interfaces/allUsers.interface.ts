export interface AllUsuarios {
    _id:          string;
    nameUser:     string;
    password:     string;
    organization: Organization[];
    ocupation?:   string[];
    telefono:     string;
    direccion?:   string;
    email:        string;
    rut:          string;
    roles:        Organization[];
    service?:     any[];
    createdAt:    Date;
    updatedAt:    Date;
    estado:       boolean;
}

export interface Organization {
    _id:       ID;
    name:      Name;
    estado?:   boolean;
    createdAt: Date;
    updatedAt: Date;
}

export enum ID {
    The620C0D94B83E4A21F81253D6 = "620c0d94b83e4a21f81253d6",
    The620C0D94B83E4A21F81253D7 = "620c0d94b83e4a21f81253d7",
    The623C92C697790A694Cdc6959 = "623c92c697790a694cdc6959",
    The63111B712B21Bfd30C4D9E02 = "63111b712b21bfd30c4d9e02",
}

export enum Name {
    CanchasElBicho = "canchas el bicho",
    Moderator = "moderator",
    Subadmin = "subadmin",
    User = "user",
}