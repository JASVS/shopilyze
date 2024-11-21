﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using server.Models;

#nullable disable

namespace server.Migrations
{
    [DbContext(typeof(AppDbContext))]
    [Migration("20241103143037_InitialMigration")]
    partial class InitialMigration
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.8")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("server.Models.Category", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("id"));

                    b.Property<string>("name")
                        .HasColumnType("text");

                    b.HasKey("id");

                    b.ToTable("Categories");
                });

            modelBuilder.Entity("server.Models.Comment", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("Author")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Content")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<DateTime>("CreatedAt")
                        .HasColumnType("timestamp with time zone");

                    b.Property<int>("ProductId")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.HasIndex("ProductId");

                    b.ToTable("Comments");
                });

            modelBuilder.Entity("server.Models.Product", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("id"));

                    b.Property<int>("categoryId")
                        .HasColumnType("integer");

                    b.Property<int>("grade")
                        .HasColumnType("integer");

                    b.Property<string>("pictureUrl")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int>("price")
                        .HasColumnType("integer");

                    b.Property<string>("productCode")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("seller")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("seoURL")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("id");

                    b.HasIndex("categoryId");

                    b.HasIndex("productCode")
                        .IsUnique();

                    b.HasIndex("seoURL")
                        .IsUnique();

                    b.ToTable("Products");
                });

            modelBuilder.Entity("server.Models.User", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("id"));

                    b.Property<DateTime>("accountRegistrationDate")
                        .HasColumnType("timestamp with time zone");

                    b.Property<string>("email")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("password")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("role")
                        .HasColumnType("text");

                    b.HasKey("id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("server.Models.Comment", b =>
                {
                    b.HasOne("server.Models.Product", "Product")
                        .WithMany("Comments")
                        .HasForeignKey("ProductId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Product");
                });

            modelBuilder.Entity("server.Models.Product", b =>
                {
                    b.HasOne("server.Models.Category", "category")
                        .WithMany("products")
                        .HasForeignKey("categoryId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.OwnsOne("server.Models.LocalizedDescription", "description", b1 =>
                        {
                            b1.Property<int>("Productid")
                                .HasColumnType("integer");

                            b1.Property<string>("ru")
                                .HasColumnType("text");

                            b1.Property<string>("uk")
                                .HasColumnType("text");

                            b1.HasKey("Productid");

                            b1.ToTable("Products");

                            b1.WithOwner()
                                .HasForeignKey("Productid");
                        });

                    b.OwnsOne("server.Models.LocalizedTitle", "title", b1 =>
                        {
                            b1.Property<int>("Productid")
                                .HasColumnType("integer");

                            b1.Property<string>("ru")
                                .HasColumnType("text");

                            b1.Property<string>("uk")
                                .HasColumnType("text");

                            b1.HasKey("Productid");

                            b1.ToTable("Products");

                            b1.WithOwner()
                                .HasForeignKey("Productid");
                        });

                    b.Navigation("category");

                    b.Navigation("description")
                        .IsRequired();

                    b.Navigation("title")
                        .IsRequired();
                });

            modelBuilder.Entity("server.Models.Category", b =>
                {
                    b.Navigation("products");
                });

            modelBuilder.Entity("server.Models.Product", b =>
                {
                    b.Navigation("Comments");
                });
#pragma warning restore 612, 618
        }
    }
}
