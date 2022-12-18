package ifpb.edu.br.send_email.model;

import java.math.BigDecimal;
import java.util.Arrays;

public class Produto {
    Integer estoque;
    BigDecimal valor;
    byte[] image;
    String nome;

    public Produto() {

    }

    public Integer getEstoque() {
        return estoque;
    }

    public void setEstoque(Integer estoque) {
        this.estoque = estoque;
    }

    public BigDecimal getValor() {
        return valor;
    }

    public void setValor(BigDecimal valor) {
        this.valor = valor;
    }

    public byte[] getImage() {
        return image;
    }

    public void setImage(byte[] image) {
        this.image = image;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    @Override
    public String toString() {
        return "Produto [estoque=" + estoque + ", valor=" + valor + ", image=" + Arrays.toString(image) + ", nome="
                + nome + "]";
    }
}
