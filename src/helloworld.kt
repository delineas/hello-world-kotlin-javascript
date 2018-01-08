import kotlin.browser.document;

fun main(args: Array<String>) {
    println("Hola mundo")

    val msg = document.getElementById("msg");
    msg!!.innerHTML = "<h1>Hola mundo</h1>"
}