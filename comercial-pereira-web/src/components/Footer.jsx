import React from 'react';
import { Store, Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white mt-12">
            {/* Seção principal */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Sobre a empresa */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center space-x-3 mb-4">
                            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                                <Store className="h-4 w-4 text-gray-900" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold">Comercial Pereira</h3>
                                <p className="text-sm text-gray-400">Gestão de Produtos</p>
                            </div>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed mb-4">
                            Há mais de 15 anos fornecendo produtos de qualidade para São João da Boa Vista e região.
                            Especializada em equipamentos domésticos, cosméticos, papelaria e muito mais.
                        </p>
                        <p className="text-gray-400 text-xs">
                            Sistema de gestão desenvolvido para otimizar o controle de estoque e vendas.
                        </p>
                    </div>

                    {/* Contato */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">Contato</h4>
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3 text-sm text-gray-300">
                                <Phone className="h-4 w-4 text-gray-400" />
                                <span>(19) 3636-3636</span>
                            </div>
                            <div className="flex items-center space-x-3 text-sm text-gray-300">
                                <Mail className="h-4 w-4 text-gray-400" />
                                <span>contato@comercialpereira.com.br</span>
                            </div>
                            <div className="flex items-start space-x-3 text-sm text-gray-300">
                                <MapPin className="h-4 w-4 text-gray-400 mt-0.5" />
                                <span>
                                    Rua XXX, XXX<br />
                                    Centro - São João da Boa Vista/SP<br />
                                    CEP: 13870-000
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Horário de funcionamento */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">Funcionamento</h4>
                        <div className="space-y-2 text-sm text-gray-300">
                            <div className="flex items-center space-x-3">
                                <Clock className="h-4 w-4 text-gray-400" />
                                <span>Segunda à Sexta</span>
                            </div>
                            <div className="text-gray-400 ml-7">08:00 às 18:00</div>

                            <div className="flex items-center space-x-3 mt-3">
                                <Clock className="h-4 w-4 text-gray-400" />
                                <span>Sábado</span>
                            </div>
                            <div className="text-gray-400 ml-7">08:00 às 12:00</div>

                            <div className="text-gray-500 text-xs mt-3">
                                Domingo: Fechado
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;