let miNombre = "Edwar Frank";
let miApellido = "Pons Bessio";
let estudiante = miNombre.concat(" ", miApellido);
let estudianteMayus = estudiante.toUpperCase();
let estudianteMinus = estudiante.toLowerCase();
let lenEstudiante = estudiante.length;
let primeraLetraNombre = miNombre[0];
// let primeraLetraNombre = miNombre.charAt(0);
let ultimaLetraApellido = miApellido.slice(-1);
// let ultimaLetraApellido = miApellido[miApellido.length - 1];

let estudianteSinEspacios = estudiante.replace(/ /g, "");
let estaNombreContenido = estudiante.includes(miNombre);

console.log(`Mi nombre es ${miNombre}`);
console.log(`Mi Apellido es ${miApellido}`);
console.log(`El nombre completo del estudiante es ${estudiante}`);
console.log(`El nombre completo del estudiante (MAYUSCULAS) ${estudianteMayus}`);
console.log(`El nombre completo del estudiante (MINUSCULAS) ${estudianteMinus}`);
console.log(`El nombre completo del estudiante tiene ${lenEstudiante} letras (con espacios)`);
console.log(`La primer letra del nombre es "${primeraLetraNombre}"`);
console.log(`La última letra del apellido es "${ultimaLetraApellido}"`);
console.log(`El nombre del estudiante sin espacios quedaría como "${estudianteSinEspacios}"`);
console.log(`El nombre "${miNombre}" ${estaNombreContenido ? "" : "NO "}SE ENCUENTRA en la variable estudiantes`);
