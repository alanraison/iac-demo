resource "local_file" "my_file" {
  content  = "This is my file"
  filename = "${path.module}/file.txt"
}
