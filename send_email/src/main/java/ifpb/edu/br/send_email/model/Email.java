package ifpb.edu.br.send_email.model;

public class Email {
    String nome;
    String email;
    User user;
    Produto produto;

    public Email() {

    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Produto getProduto() {
        return produto;
    }

    public void setProduto(Produto produto) {
        this.produto = produto;
    }

    @Override
    public String toString() {
        return "Email [nome=" + nome + ", email=" + email + ", user=" + user + ", produto=" + produto + "]";
    }
}
