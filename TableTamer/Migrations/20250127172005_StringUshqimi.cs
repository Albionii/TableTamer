using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TableTamer.Migrations
{
    /// <inheritdoc />
    public partial class StringUshqimi : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Ushqimi",
                table: "Fatura",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Ushqimi",
                table: "Fatura");
        }
    }
}
