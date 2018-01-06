import kotlin.browser.document;

fun main(args: Array<String>) {
    println("Hello")

    val root = document.getElementById("root")
    root!!.innerHTML = "<h1>Hola mundo</h1>"
}